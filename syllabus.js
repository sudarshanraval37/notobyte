/* ================================================================
   syllabus.js — NotoByte Syllabus Hub
   ----------------------------------------------------------------
   Program -> Branch -> Semester -> Subject list (Theory/Lab),
   tap a subject to expand its Units accordion-style, in place.
   Reads data from syllabusData (syllabus-data.js).
================================================================ */

const syllabusState = {
  program: null,
  branch: null,
  semester: null,
  expandedSubject: null
};

/* ---------------- lookups ---------------- */
function syllabusGetProgram(id) {
  return syllabusData.programs.find(p => p.id === id) || null;
}
function syllabusGetBranch(programId, branchId) {
  const program = syllabusGetProgram(programId);
  return program ? program.branches.find(b => b.id === branchId) : null;
}
function syllabusGetSemester(programId, branchId, semId) {
  const branch = syllabusGetBranch(programId, branchId);
  if (!branch || !branch.semesters) return null;

  // semesters is stored as an object: { sem1: {...}, sem2: {...}, ... }
  return branch.semesters[semId] || null;
}

/* ---------------- view switching ---------------- */
function syllabusShowView(viewId) {
  document.querySelectorAll('#syllabusScreen .notes-view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
}

/* ---------------- breadcrumb (shares notes-breadcrumb styling) ---------------- */
function syllabusRenderBreadcrumb() {
  const wrap = document.getElementById('syllabusBreadcrumb');
  const crumbs = [{ label: 'Syllabus', onclick: 'syllabusGoToBranches()' }];

  const program = syllabusState.program ? syllabusGetProgram(syllabusState.program) : null;
  const branch = program && syllabusState.branch ? syllabusGetBranch(syllabusState.program, syllabusState.branch) : null;
  const semester = branch && syllabusState.semester ? syllabusGetSemester(syllabusState.program, syllabusState.branch, syllabusState.semester) : null;

  if (branch) crumbs.push({ label: branch.title, onclick: 'syllabusGoToSemesters()' });
  if (semester) crumbs.push({ label: semester.title, onclick: 'syllabusGoToSubjects()' });

  wrap.innerHTML = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    return `<span class="notes-crumb ${isLast ? 'notes-crumb-current' : ''}"
              ${isLast ? '' : `onclick="${c.onclick}"`}>${c.label}</span>` +
      (isLast ? '' : `<i class="fas fa-chevron-right notes-crumb-sep"></i>`);
  }).join('');
}

/* ---------------- entry point: open a program from the home tiles ---------------- */
function syllabusOpenProgram(programId) {
  syllabusState.program = programId;
  syllabusState.branch = null;
  syllabusState.semester = null;
  syllabusState.expandedSubject = null;

  const program = syllabusGetProgram(programId);
  if (!program || !program.branches.length) {
    showToast(`📘 ${program ? program.title : 'This section'} syllabus is coming soon!`);
    return;
  }
  syllabusGoToBranches();
}

/* ---------------- step 1: branch list ---------------- */
function syllabusGoToBranches() {
  const program = syllabusGetProgram(syllabusState.program);
  if (!program) return;

  document.getElementById('syllabusLevelTitle').textContent = `${program.title} — Select Branch`;
  document.getElementById('syllabusLevelSub').style.display = 'none';
  document.getElementById('syllabusBackBtn').setAttribute('onclick', "appShowScreen('home')");
  document.getElementById('syllabusBackLabel').textContent = 'Back to Home';

  const grid = document.getElementById('syllabusLevelGrid');
  grid.className = 'notes-level-grid';
  grid.innerHTML = program.branches.map(b => `
    <div class="notes-option-card" onclick="syllabusSelectBranch('${b.id}')">
      <div class="notes-option-icon"><i class="${b.icon}"></i></div>
      <div class="notes-option-text"><h3>${b.title}</h3></div>
    </div>
  `).join('');

  syllabusRenderBreadcrumb();
  syllabusShowView('syllabusLevelView');
}

function syllabusSelectBranch(branchId) {
  syllabusState.branch = branchId;
  syllabusState.semester = null;
  syllabusGoToSemesters();
}

/* ---------------- step 2: semester grid (2-col pill, matches PDF) ---------------- */
function syllabusGoToSemesters() {
  const branch = syllabusGetBranch(syllabusState.program, syllabusState.branch);
  if (!branch) return syllabusGoToBranches();

  document.getElementById('syllabusLevelTitle').textContent = `${branch.title} — Select Semester`;
  document.getElementById('syllabusLevelSub').style.display = 'none';
  document.getElementById('syllabusBackBtn').setAttribute('onclick', 'syllabusGoToBranches()');
  document.getElementById('syllabusBackLabel').textContent = 'Back to Branches';

  const grid = document.getElementById('syllabusLevelGrid');
  grid.className = 'notes-level-grid notes-level-grid-pill';

  // semesters is stored as an object in syllabus-data.js
  // so adding/editing a semester is much easier.
  const semesters = Object.values(branch.semesters || {});

  grid.innerHTML = semesters.map(s => `
    <div class="notes-pill-card" onclick="syllabusSelectSemester('${s.id}')">${s.title}</div>
  `).join('');

  syllabusRenderBreadcrumb();
  syllabusShowView('syllabusLevelView');
}

function syllabusSelectSemester(semId) {
  syllabusState.semester = semId;
  syllabusState.expandedSubject = null;
  syllabusGoToSubjects();
}

/* ---------------- step 3: subject list w/ accordion units ---------------- */
function syllabusGoToSubjects() {
  const semester = syllabusGetSemester(syllabusState.program, syllabusState.branch, syllabusState.semester);
  if (!semester) return syllabusGoToSemesters();

  document.getElementById('syllabusSubjectBackBtn').setAttribute('onclick', 'syllabusGoToSemesters()');

  const title = `${syllabusGetBranch(syllabusState.program, syllabusState.branch).title} - ${semester.title}`;
  document.getElementById('syllabusSubjectTitle').textContent = '';

  syllabusRenderSubjectList(semester);
  syllabusRenderBreadcrumb();
  syllabusShowView('syllabusSubjectView');
}

function syllabusRenderSubjectList(semester) {
  const wrap = document.getElementById('syllabusSubjectList');

  if (!semester.theory.length && !semester.lab.length) {
    wrap.innerHTML = `
      <div class="no-results">
        <i class="fas fa-folder-open"></i><br>
        <h3>Nothing here yet</h3>
        <p>The syllabus for this semester hasn't been added yet.</p>
      </div>`;
    return;
  }

  let html = '';

  if (semester.theory.length) {
    html += `<h3 class="syllabus-group-title">Theory Subjects</h3>`;
    html += semester.theory.map((subj, i) => syllabusRenderSubjectRow(subj, `t${i}`)).join('');
  }
  if (semester.lab.length) {
    html += `<h3 class="syllabus-group-title">Lab Subjects</h3>`;
    html += semester.lab.map((subj, i) => syllabusRenderSubjectRow(subj, `l${i}`, true)).join('');
  }

  wrap.innerHTML = html;
}

function syllabusRenderSubjectRow(subj, key, isLab) {
  const expanded = syllabusState.expandedSubject === key;
  const hasUnits = subj.units && subj.units.length;

  let unitsHtml = '';
  if (expanded && hasUnits) {
    unitsHtml = `
      <div class="syllabus-units-panel">
        <h4 class="syllabus-units-heading">${subj.name}</h4>
        ${subj.units.map(u => `
          <div class="syllabus-unit">
            <div class="syllabus-unit-title">${u.title}</div>
            <ul class="syllabus-unit-points">
              ${u.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>`;
  }

  return `
    <div class="syllabus-subject-row ${isLab ? 'syllabus-subject-row-lab' : ''} ${expanded ? 'syllabus-subject-row-active' : ''}"
         onclick="syllabusToggleSubject('${key}')">
      <span>${subj.name}</span>
      <span class="syllabus-subject-code">${subj.code || ''}</span>
    </div>
    ${unitsHtml}
  `;
}

function syllabusToggleSubject(key) {
  syllabusState.expandedSubject = syllabusState.expandedSubject === key ? null : key;
  const semester = syllabusGetSemester(syllabusState.program, syllabusState.branch, syllabusState.semester);
  syllabusRenderSubjectList(semester);
}

/* ---------------- reset when leaving the screen from the app shell ---------------- */
function syllabusReset() {
  syllabusState.program = null;
  syllabusState.branch = null;
  syllabusState.semester = null;
  syllabusState.expandedSubject = null;
}
