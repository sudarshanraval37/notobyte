/* ================================================================
   notes.js — NotoByte Notes Section (Hierarchical Navigation)
   ─────────────────────────────────────────────────────────────
   Reads notesTree from notes-data.js and drives the whole
   Notes browsing experience:

     Programs → Branches → Years → Semesters → Resource Types
       → Subjects → Resources

   Only the level currently being viewed is rendered to the DOM —
   nothing is pre-built up front, so the page stays fast even as
   more resources are added later.

   Uses downloadNote() and showToast() from script.js — unchanged.
================================================================ */

/* ----------------------------------------------------------------
   0. STATE
   Tracks the user's current position in the hierarchy. Each level
   stores the *id* of what was picked, so we can always look the
   full object back up from notesTree.
---------------------------------------------------------------- */
const notesState = {
  program: null,
  branch: null,
  year: null,
  semester: null,
  resourceType: null,
  subject: null
};

/* Icons/labels used for the resourceType icon fallback */
const NOTES_TYPE_ICON = {
  notes: "fas fa-book",
  pyqs: "fas fa-file-signature",
  assignments: "fas fa-pen",
  "important-downloads": "fas fa-file-download"
};


/* ----------------------------------------------------------------
   1. LOOKUP HELPERS
   Walk notesTree using the ids stored in notesState.
---------------------------------------------------------------- */
function notesGetProgram(id) {
  return notesTree.programs.find(p => p.id === id) || null;
}
function notesGetBranch(programId, branchId) {
  const program = notesGetProgram(programId);
  return program ? program.branches.find(b => b.id === branchId) : null;
}
function notesGetYear(programId, branchId, yearId) {
  const branch = notesGetBranch(programId, branchId);
  return branch ? branch.years.find(y => y.id === yearId) : null;
}
function notesGetSemester(programId, branchId, yearId, semId) {
  const year = notesGetYear(programId, branchId, yearId);
  return year ? year.semesters.find(s => s.id === semId) : null;
}
function notesGetResourceType(programId, branchId, yearId, semId, typeId) {
  const sem = notesGetSemester(programId, branchId, yearId, semId);
  return sem ? sem.resourceTypes.find(t => t.id === typeId) : null;
}
function notesGetSubject(programId, branchId, yearId, semId, typeId, subjectId) {
  const type = notesGetResourceType(programId, branchId, yearId, semId, typeId);
  return type ? type.subjects.find(s => s.id === subjectId) : null;
}


/* ----------------------------------------------------------------
   2. VIEW SWITCHING
   Same one-view-visible-at-a-time pattern already used by the
   Quiz Zone (see quiz.js / quiz.css .quiz-view).
---------------------------------------------------------------- */
function notesShowView(viewId) {
  document.querySelectorAll('#notes .notes-view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}


/* ----------------------------------------------------------------
   3. BREADCRUMB
   Rebuilt every time the state changes. Every past level is a
   clickable link that jumps straight back to that level.
---------------------------------------------------------------- */
function notesRenderBreadcrumb() {
  const wrap = document.getElementById('notesBreadcrumb');
  const crumbs = [{ label: 'Notes', onclick: 'notesGoToPrograms()' }];

  const program = notesState.program ? notesGetProgram(notesState.program) : null;
  const branch = program && notesState.branch ? notesGetBranch(notesState.program, notesState.branch) : null;
  const year = branch && notesState.year ? notesGetYear(notesState.program, notesState.branch, notesState.year) : null;
  const semester = year && notesState.semester ? notesGetSemester(notesState.program, notesState.branch, notesState.year, notesState.semester) : null;
  const type = semester && notesState.resourceType ? notesGetResourceType(notesState.program, notesState.branch, notesState.year, notesState.semester, notesState.resourceType) : null;
  const subject = type && notesState.subject ? notesGetSubject(notesState.program, notesState.branch, notesState.year, notesState.semester, notesState.resourceType, notesState.subject) : null;

  if (program) crumbs.push({ label: program.title, onclick: 'notesGoToBranches()' });
  if (branch) crumbs.push({ label: branch.title, onclick: 'notesGoToYears()' });
  if (year) crumbs.push({ label: year.title, onclick: 'notesGoToSemesters()' });
  if (semester) crumbs.push({ label: semester.title, onclick: 'notesGoToTypes()' });
  if (type) crumbs.push({ label: type.title, onclick: 'notesGoToSubjects()' });
  if (subject) crumbs.push({ label: subject.title, onclick: 'notesGoToResources()' });

  wrap.innerHTML = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    return `<span class="notes-crumb ${isLast ? 'notes-crumb-current' : ''}"
              ${isLast ? '' : `onclick="${c.onclick}"`}>${c.label}</span>` +
      (isLast ? '' : `<i class="fas fa-chevron-right notes-crumb-sep"></i>`);
  }).join('');
}


/* ----------------------------------------------------------------
   4. GENERIC CARD LIST RENDERER
   Used for Branches / Years / Semesters / Resource Types / Subjects
   — all of them are just "pick a card, go deeper" screens.
---------------------------------------------------------------- */
function notesRenderCardList(items, onSelectFnName, opts = {}) {
  const grid = document.getElementById('notesLevelGrid');
  const titleEl = document.getElementById('notesLevelTitle');
  const subEl = document.getElementById('notesLevelSub');

  titleEl.textContent = opts.title || '';
  subEl.textContent = opts.sub || '';
  subEl.style.display = opts.sub ? 'block' : 'none';

  if (!items.length) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-folder-open"></i><br>
        <h3>Nothing here yet</h3>
        <p>Resources for this section haven't been added yet.</p>
      </div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="notes-option-card" onclick="${onSelectFnName}('${item.id}')">
      <div class="notes-option-icon"><i class="${item.icon || opts.fallbackIcon || 'fas fa-folder'}"></i></div>
      <div class="notes-option-text">
        <h3>${item.title}</h3>
        ${item.desc ? `<p>${item.desc}</p>` : (opts.countLabel ? `<p>${notesCountLabel(item, opts.countLabel)}</p>` : '')}
      </div>
      <i class="fas fa-chevron-right notes-option-arrow"></i>
    </div>
  `).join('');
}

/* Small helper to show e.g. "3 subjects" / "12 resources" under a card */
function notesCountLabel(item, kind) {
  if (kind === 'branches') return `${item.years ? item.years.length : 0} year${item.years && item.years.length === 1 ? '' : 's'}`;
  if (kind === 'years') return `${item.semesters ? item.semesters.length : 0} semester${item.semesters && item.semesters.length === 1 ? '' : 's'}`;
  if (kind === 'semesters') return `${item.resourceTypes ? item.resourceTypes.length : 0} category${item.resourceTypes && item.resourceTypes.length === 1 ? '' : 'ies'}`;
  if (kind === 'types') return `${item.subjects ? item.subjects.length : 0} subject${item.subjects && item.subjects.length === 1 ? '' : 's'}`;
  if (kind === 'subjects') return `${item.resources ? item.resources.length : 0} resource${item.resources && item.resources.length === 1 ? '' : 's'}`;
  return '';
}


/* ----------------------------------------------------------------
   5. STEP 1 — PROGRAM SELECTION (entry point)
---------------------------------------------------------------- */
function notesRenderPrograms() {
  const grid = document.getElementById('notesProgramGrid');

  let html = notesTree.programs.map(program => `
    <div class="notes-program-card" onclick="notesSelectProgram('${program.id}')">
      <div class="notes-program-icon"><i class="${program.icon}"></i></div>
      <h3>${program.title}</h3>
      <p>${program.desc}</p>
    </div>
  `).join('');

  if (notesTree.uncategorized && notesTree.uncategorized.length) {
    html += `
      <div class="notes-program-card notes-program-card-alt" onclick="notesShowUncategorized()">
        <div class="notes-program-icon"><i class="fas fa-box-archive"></i></div>
        <h3>Uncategorized</h3>
        <p>${notesTree.uncategorized.length} resource${notesTree.uncategorized.length === 1 ? '' : 's'} awaiting manual sorting</p>
      </div>`;
  }

  grid.innerHTML = html;
}

function notesGoToPrograms() {
  notesState.program = null;
  notesState.branch = null;
  notesState.year = null;
  notesState.semester = null;
  notesState.resourceType = null;
  notesState.subject = null;
  notesRenderBreadcrumb();
  notesShowView('notesProgramView');
}

function notesSelectProgram(programId) {
  notesState.program = programId;
  notesState.branch = null;
  notesState.year = null;
  notesState.semester = null;
  notesState.resourceType = null;
  notesState.subject = null;
  notesGoToBranches();
}


/* ----------------------------------------------------------------
   6. STEP 2 — BRANCH SELECTION
---------------------------------------------------------------- */
function notesGoToBranches() {
  const program = notesGetProgram(notesState.program);
  if (!program) return notesGoToPrograms();

  notesRenderCardList(program.branches, 'notesSelectBranch', {
    title: `${program.title} — Choose your Branch`,
    fallbackIcon: 'fas fa-diagram-project',
    countLabel: 'branches'
  });
  document.getElementById('notesLevelBackBtn').setAttribute('onclick', 'notesGoToPrograms()');
  document.getElementById('notesLevelBackLabel').textContent = 'Back to Programs';

  notesRenderBreadcrumb();
  notesShowView('notesLevelView');
}

function notesSelectBranch(branchId) {
  notesState.branch = branchId;
  notesState.year = null;
  notesState.semester = null;
  notesState.resourceType = null;
  notesState.subject = null;
  notesGoToYears();
}


/* ----------------------------------------------------------------
   7. STEP 3 — YEAR SELECTION
---------------------------------------------------------------- */
function notesGoToYears() {
  const branch = notesGetBranch(notesState.program, notesState.branch);
  if (!branch) return notesGoToBranches();

  notesRenderCardList(branch.years, 'notesSelectYear', {
    title: `${branch.title} — Choose Year`,
    fallbackIcon: 'fas fa-calendar-days',
    countLabel: 'years'
  });
  document.getElementById('notesLevelBackBtn').setAttribute('onclick', 'notesGoToBranches()');
  document.getElementById('notesLevelBackLabel').textContent = 'Back to Branches';

  notesRenderBreadcrumb();
  notesShowView('notesLevelView');
}

function notesSelectYear(yearId) {
  notesState.year = yearId;
  notesState.semester = null;
  notesState.resourceType = null;
  notesState.subject = null;
  notesGoToSemesters();
}


/* ----------------------------------------------------------------
   8. STEP 3b — SEMESTER SELECTION
---------------------------------------------------------------- */
function notesGoToSemesters() {
  const year = notesGetYear(notesState.program, notesState.branch, notesState.year);
  if (!year) return notesGoToYears();

  notesRenderCardList(year.semesters, 'notesSelectSemester', {
    title: `${year.title} — Choose Semester`,
    fallbackIcon: 'fas fa-layer-group',
    countLabel: 'semesters'
  });
  document.getElementById('notesLevelBackBtn').setAttribute('onclick', 'notesGoToYears()');
  document.getElementById('notesLevelBackLabel').textContent = 'Back to Years';

  notesRenderBreadcrumb();
  notesShowView('notesLevelView');
}

function notesSelectSemester(semId) {
  notesState.semester = semId;
  notesState.resourceType = null;
  notesState.subject = null;
  notesGoToTypes();
}


/* ----------------------------------------------------------------
   9. STEP 4 — RESOURCE TYPE SELECTION
---------------------------------------------------------------- */
function notesGoToTypes() {
  const sem = notesGetSemester(notesState.program, notesState.branch, notesState.year, notesState.semester);
  if (!sem) return notesGoToSemesters();

  notesRenderCardList(sem.resourceTypes, 'notesSelectType', {
    title: `${sem.title} — Choose Category`,
    fallbackIcon: 'fas fa-folder',
    countLabel: 'types'
  });
  document.getElementById('notesLevelBackBtn').setAttribute('onclick', 'notesGoToSemesters()');
  document.getElementById('notesLevelBackLabel').textContent = 'Back to Semesters';

  notesRenderBreadcrumb();
  notesShowView('notesLevelView');
}

function notesSelectType(typeId) {
  notesState.resourceType = typeId;
  notesState.subject = null;
  notesGoToSubjects();
}


/* ----------------------------------------------------------------
   10. STEP 5 — SUBJECT SELECTION
---------------------------------------------------------------- */
function notesGoToSubjects() {
  const type = notesGetResourceType(notesState.program, notesState.branch, notesState.year, notesState.semester, notesState.resourceType);
  if (!type) return notesGoToTypes();

  notesRenderCardList(type.subjects, 'notesSelectSubject', {
    title: `${type.title} — Choose Subject`,
    fallbackIcon: 'fas fa-book-open',
    countLabel: 'subjects'
  });
  document.getElementById('notesLevelBackBtn').setAttribute('onclick', 'notesGoToTypes()');
  document.getElementById('notesLevelBackLabel').textContent = 'Back to Categories';

  notesRenderBreadcrumb();
  notesShowView('notesLevelView');
}

function notesSelectSubject(subjectId) {
  notesState.subject = subjectId;
  notesGoToResources();
}


/* ----------------------------------------------------------------
   11. STEP 6 — FINAL RESOURCES (the actual downloadable cards)
   Reuses the site's existing .notes-grid / .note-card markup and
   the existing downloadNote() function from script.js.
---------------------------------------------------------------- */
function notesGoToResources() {
  const subject = notesGetSubject(
    notesState.program, notesState.branch, notesState.year,
    notesState.semester, notesState.resourceType, notesState.subject
  );
  if (!subject) return notesGoToSubjects();

  document.getElementById('notesResourceTitle').textContent = subject.title;
  document.getElementById('notesResourceBackBtn').setAttribute('onclick', 'notesGoToSubjects()');

  notesRenderResourceCards(subject.resources, document.getElementById('notesResourceGrid'));

  notesRenderBreadcrumb();
  notesShowView('notesResourceView');
}

/* Shared card-builder — used for normal browsing, search results,
   and the Uncategorized bucket. `pathLabel` (optional) shows the
   full breadcrumb path under the title, used in search results. */
function notesRenderResourceCards(resources, gridEl, pathLookup) {
  if (!resources.length) {
    gridEl.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i><br>
        <h3>No resources found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
    return;
  }

  gridEl.innerHTML = resources.map(note => `
    <div class="note-card" data-id="${note.id}">
      <div class="card-top">
        <div class="subject-icon">
          <i class="${note.icon}"></i>
        </div>
        <div class="note-meta">
          <div class="note-sem">${note.sem}</div>
          <div class="note-size"><i class="fas fa-file-pdf"></i> ${note.size}</div>
        </div>
      </div>

      <div class="note-subject">${note.title}</div>
      ${pathLookup ? `<div class="notes-path-tag"><i class="fas fa-signs-post"></i> ${pathLookup(note)}</div>` : ''}
      <div class="note-desc">${note.desc}</div>

      <div class="note-contributor">
        <div class="contrib-avatar">${note.initials}</div>
        <span>Contributed by <strong>${note.contributor}</strong></span>
      </div>

      <div class="note-footer">
        <span class="note-category">${note.category}</span>
        <button class="download-btn" onclick="downloadNote('${note.title.replace(/'/g, "\\'")}', '${note.pdfUrl}')">
          <i class="fas fa-download"></i> Download
        </button>
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    gridEl.querySelectorAll('.note-card').forEach((card, index) => {
      setTimeout(() => card.classList.add('visible'), index * 60);
    });
  }, 30);
}


/* ----------------------------------------------------------------
   12. UNCATEGORIZED BUCKET
---------------------------------------------------------------- */
function notesShowUncategorized() {
  document.getElementById('notesResourceTitle').textContent = 'Uncategorized Resources';
  document.getElementById('notesResourceBackBtn').setAttribute('onclick', 'notesGoToPrograms()');
  notesRenderResourceCards(notesTree.uncategorized, document.getElementById('notesResourceGrid'));

  const wrap = document.getElementById('notesBreadcrumb');
  wrap.innerHTML = `<span class="notes-crumb" onclick="notesGoToPrograms()">Notes</span>
    <i class="fas fa-chevron-right notes-crumb-sep"></i>
    <span class="notes-crumb notes-crumb-current">Uncategorized</span>`;

  notesShowView('notesResourceView');
}


/* ----------------------------------------------------------------
   13. SEARCH
   Flattens the entire tree (once) into resource + readable path,
   so the user can search by subject, title, PYQ, notes, etc. and
   see exactly where each result lives.
---------------------------------------------------------------- */
let notesFlatIndex = null;

function notesBuildFlatIndex() {
  const index = [];

  notesTree.programs.forEach(program => {
    program.branches.forEach(branch => {
      branch.years.forEach(year => {
        year.semesters.forEach(sem => {
          sem.resourceTypes.forEach(type => {
            type.subjects.forEach(subject => {
              subject.resources.forEach(resource => {
                index.push({
                  resource,
                  path: `${program.title} > ${branch.title} > ${year.title} > ${sem.title} > ${type.title} > ${subject.title}`
                });
              });
            });
          });
        });
      });
    });
  });

  (notesTree.uncategorized || []).forEach(resource => {
    index.push({ resource, path: 'Uncategorized' });
  });

  notesFlatIndex = index;
}

function notesHandleSearch() {
  const query = document.getElementById('notesSearchInput').value.trim().toLowerCase();

  if (!query) {
    document.getElementById('notesSearchView').classList.remove('active');
    notesGoToPrograms();
    return;
  }

  if (!notesFlatIndex) notesBuildFlatIndex();

  const matches = notesFlatIndex.filter(({ resource }) =>
    resource.title.toLowerCase().includes(query) ||
    resource.desc.toLowerCase().includes(query) ||
    resource.category.toLowerCase().includes(query) ||
    resource.sem.toLowerCase().includes(query)
  );

  document.getElementById('notesSearchResultsCount').textContent =
    `${matches.length} result${matches.length === 1 ? '' : 's'} for "${document.getElementById('notesSearchInput').value.trim()}"`;

  notesRenderResourceCards(
    matches.map(m => m.resource),
    document.getElementById('notesSearchResults'),
    (note) => {
      const found = notesFlatIndex.find(m => m.resource === note);
      return found ? found.path : '';
    }
  );

  document.querySelectorAll('#notes .notes-view').forEach(v => v.classList.remove('active'));
  document.getElementById('notesSearchView').classList.add('active');

  document.getElementById('notesBreadcrumb').innerHTML =
    `<span class="notes-crumb notes-crumb-current">Search Results</span>`;
}


/* ----------------------------------------------------------------
   14. INITIALIZE
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  notesRenderPrograms();
});
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  notesRenderPrograms();
}
