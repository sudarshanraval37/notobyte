/* ================================================================
   script.js — StudyVault Notes Platform
   Author  : StudyVault Team
   Purpose : All interactive functionality including:
             - Notes data & rendering
             - Search & category filter
             - Download with toast notification
             - Theme (dark/light) toggle
             - Mobile hamburger menu
             - Floating particles background
             - Scroll animations & active nav tracking
             - Back to top button
             - Loading screen
================================================================ */


/* ================================================================
   1. NOTES DATA
   ─────────────
   This is the main array of all study notes on the platform.
   Each note is an object with the following fields:

   HOW TO ADD A NEW NOTE:
   ──────────────────────
   1. Place your PDF file inside the folder: assets/pdfs/
      Example: assets/pdfs/physics-notes.pdf

   2. Copy one of the objects below and paste it at the end of
      the array (before the closing ]; bracket).

   3. Fill in the fields:
      - id          → Give it the next number (e.g. 10, 11, 12...)
      - subject     → Full subject name shown on the card
      - sem         → Semester and course (e.g. "Sem 3 | B.Tech")
      - desc        → Short description shown on the card
      - size        → PDF file size (e.g. "2.5 MB") — check manually
      - contributor → Name of the person who contributed the notes
      - initials    → 2-letter initials for the avatar (e.g. "RK")
      - category    → Must match a filter button. Options:
                       "engineering" | "science" | "commerce" |
                       "Important Downloads"        | "assignment"
      - icon        → Font Awesome icon class for the subject
                       Browse icons at: https://fontawesome.com/icons
      - pdfUrl      → Path to the PDF file
                       Example: "assets/pdfs/your-file-name.pdf"

   NOTE: To add a new category (e.g. "law"), also add a new filter
   button in index.html inside the <div class="filters"> section.
================================================================ */
const notesData = [

    {
    id: 25,
    subject: "Application Format For PLC and TC",
    sem: "All Branch Passout Students | Diploma",
    desc: "Application format for Polytechnic/College Leaving Certificate and Transfer Certificate",
    size: "0.5 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "Important Downloads",
    icon: "fas fa-file-download",
    pdfUrl: "assets/pdfs/Application-for-PLC&TC.pdf"
  },

    {
    id: 24,
    subject: "Energy Conservation & Audit PYQ 2024",
    sem: "Mech 6th sem | Diploma",
    desc: "Previous year question of ECA of year 2024",
    size: "3.2 MB",
    contributor: "Raghav Kumar",
    initials: "RK",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/ECA-PYQ-2024.pdf"
  },

      {
    id: 23,
    subject: "Applied Chemistry A Model Set",
    sem: "Civil 1st sem | Diploma",
    desc: "Solved Model Set of Applied Chemistry-A",
    size: "1.8 MB",
    contributor: "Supriya Kumari",
    initials: "SK",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/Applied Chemistry-A Bihar 1st Sem Model Set-1 - Supriya.pdf"
  },


    {
    id: 22,
    subject: "Basic Engg. Mathematics Model Set",
    sem: "Civil 1st sem | Diploma",
    desc: "Solved Model Set of Basic Engg. Mathematics",
    size: "2.2 MB",
    contributor: "Supriya Kumari",
    initials: "SK",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/Basic Engineering Mathematics Bihar 1st Semester Model set-1 - Supriya.pdf"
  },


  {
    id: 21,
    subject: "Basic Engg. Mathematics VVI Question",
    sem: "Civil 1st sem | Diploma",
    desc: "All important Questions of Basic Engg. Mathematics Objective + Subjective",
    size: "6.5 MB",
    contributor: "Supriya Kumari",
    initials: "SK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/Basic Engg. Mathematics VVI Question - Supriya.pdf"
  },


  {
    id: 20,
    subject: "Web Technology PYQ 2024",
    sem: "CSE 2nd sem | Diploma",
    desc: "Full solved pyq of year 2024 by NotoByte",
    size: "50 KB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/web_technology_pyq_2024_solved.pdf"
  },


  {
    id: 19,
    subject: "Web Technology PYQ 2022",
    sem: "CSE 2nd sem | Diploma",
    desc: "Full solved pyq of year 2022 by Polytechnic Academy",
    size: "1.4 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/web_technology_pyq_2022.pdf"
  },
  
  {
    id: 18,
    subject: "Entrepreneurship & Start-ups Top 50+ MCQ",
    sem: "Common paper 6th sem | Diploma",
    desc: "Top 50+ most expected MCQ of Entrepreneurship & Start-ups by JRS Mantra",
    size: "10 MB",
    contributor: "Ankush Kumar",
    initials: "AK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/50+_IMPORTANT_MCQ _2026.pdf"
  },
  {
    id: 1,
    subject: "E.V Advance",
    sem: "Sem 6 | Diploma",
    desc: "Complete notes of e.v advance by polytechnic academy",
    size: "4.2 MB",
    contributor: "Vikki Kumar",
    initials: "V.K",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/ev-ad-notes.pdf"
    /* HOW TO DOWNLOAD: When the user clicks Download, this path is used.
       Make sure the file exists at: assets/pdfs/dsa-notes.pdf */
  },
  {
    id: 2,
    subject: "ESU 2023 PYQ",
    sem: "Sem 6 | Diploma",
    desc: "Entrepreneurship & Startups Previous year question of year 2023 with answer",
    size: "51 KB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pdfs/ESU PYQ 2023.pdf"
  },
  {
    id: 3,
    subject: "ESU 2024 PYQ",
    sem: "Sem 6 | Diploma",
    desc: "Entrepreneurship & Startups 2024 pyq",
    size: "1.1 MB",
    contributor: "Annu Priya",
    initials: "AP",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/Entrepreneurship_&_Startup_2024 EVEN.pdf"
  },
  {
    id: 4,
    subject: "Operating Systems",
    sem: "Sem 4 | B.Tech",
    desc: "Complete OS notes on process management, memory management, file systems, deadlocks and scheduling algorithms.",
    size: "5.1 MB",
    contributor: "Neha Patel",
    initials: "NP",
    category: "engineering",
    icon: "fas fa-server",
    pdfUrl: "assets/pdfs/operating-systems.pdf"
  },
  {
    id: 5,
    subject: "World History",
    sem: "Sem 2 | B.A",
    desc: "Detailed notes on modern world history from the Renaissance period to the 21st century global events.",
    size: "3.3 MB",
    contributor: "Arjun Mehta",
    initials: "AM",
    category: "Important Downloads",
    icon: "fas fa-globe",
    pdfUrl: "assets/pdfs/world-history.pdf"
  },
  {
    id: 6,
    subject: "E.V Advance Assignment",
    sem: "Sem 6 | Diploma",
    desc: "Handwritten assignment of E.V Advance",
    size: "4.2 MB",
    contributor: "Varsa Kumari",
    initials: "VK",
    category: "assignment",
    icon: "fas fa-pen",
    pdfUrl: "assets/assignment/E.V-advance-assignment.pdf"
  },
  {
    id: 7,
    subject: "E-Governance PYQ 2024",
    sem: "Sem 6 | Diploma",
    desc: "Previous year question of Introduction to E-governance (2018604B) of year 2024",
    size: "3.5 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/e-governance_pyq_2024.pdf"
  },
  {
    id: 8,
    subject: "Software Engineering 2024 PYQ",
    sem: "Sem 6 | Diploma",
    desc: "Previous year question of Software Engineering of year 2024",
    size: "2.9 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/se_pyq_2024.pdf"
  },
  {
    id: 9,
    subject: "ESU Full notes",
    sem: "Sem 6 | Diploma",
    desc: "Complete notes of Entreprenuership & Start-ups",
    size: "17.9 MB",
    contributor: "Annu Priya",
    initials: "AP",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/ESU_full_notes.pdf"
  },

  {
    id: 10,
    subject: "E.V Advance",
    sem: "Sem 4 | Diploma",
    desc: "Complete notes of e.v advance by polytechnic academy",
    size: "4.2 MB",
    contributor: "Vikki Kumar",
    initials: "V.K",
    category: "engineering",
    icon: "fas fa-code",
    pdfUrl: "assets/pdfs/EV AD(1).pdf"
    /* HOW TO DOWNLOAD: When the user clicks Download, this path is used.
       Make sure the file exists at: assets/pdfs/dsa-notes.pdf */
  },


  {
    id: 11,
    subject: "Software Engineering 2023 PYQ",
    sem: "Sem 6 | Diploma",
    desc: "Previous year question of Software Engineering of year 2023",
    size: "3.3 MB",
    contributor: "Sudarshan Raval",
    initials: "SR",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/se_pyq_2023.pdf"
  },

  {
    id: 12,
    subject: "Electrical concept | BULLET Volume-2",
    sem: "Competitive Book | SSC JE",
    desc: "Electrical Engineering book for all competitive exam in English and Hindi",
    size: "33 MB",
    contributor: "Pankaj Kumar",
    initials: "PK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/Electrical_book_volume-2.pdf"
  },

  {
    id: 13,
    subject: "Advance Surveying PYQ",
    sem: "Civil Sem 4 | Diploma",
    desc: "Previous year question of Advance Surveying of year 2024",
    size: "2.9 MB",
    contributor: "Md Ashfak",
    initials: "MA",
    category: "PYQs",
    icon: "fas fa-file-signature",
    pdfUrl: "assets/pyq/Advance_surveying_pyq_2024.pdf"
  },

  {
    id: 14,
    subject: "Python Programming",
    sem: "All semester | Diploma",
    desc: "Complete Python Programming notes of Technical Classes",
    size: "38.8 MB",
    contributor: "Rahul Kumar",
    initials: "RK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/python_full_notes.pdf"
  },

  {
    id: 15,
    subject: "Communication Skills Guess questions",
    sem: "Sem 4 | Diploma",
    desc: "Guess Questions of communication skills for exam",
    size: "5 KB",
    contributor: "Himanshu Kumar",
    initials: "HK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/communication_skills_guess_question_2026.pdf"
  },

  {
    id: 16,
    subject: "Soil Mechanics & Foundation",
    sem: "Civil Sem 4 | Diploma",
    desc: "Overview of Soil mechanics UNIT 1",
    size: "14.5 MB",
    contributor: "Piyush Kumar",
    initials: "PK",
    category: "Notes",
    icon: "fas fa-book",
    pdfUrl: "assets/pdfs/soil_mech_notes.pdf"
  },





  /* ──────────────────────────────────────────────────────────────
     ADD YOUR NEW NOTES BELOW THIS LINE
     Copy the template above, fill in the fields, and save.
     ────────────────────────────────────────────────────────────── */
];


/* ================================================================
   2. CONTRIBUTORS DATA
   ────────────────────
   Displayed in the "Top Contributors" section.

   HOW TO EDIT:
   - name    → Full name of the contributor
   - role    → Their course/college (shown below name)
   - initials→ 2 letters shown in the circular avatar
   - notes   → How many notes they have submitted (text)
   - badge   → Emoji + label shown below the notes count

   To add a new contributor, copy one object and paste it at the end
   of the array (before the closing ]; bracket).
================================================================ */
const contributorsData = [
  {
    name: "Sudarshan Raval",
    role: "Diploma Student | G.P Banka",
    initials: "SR",
    notes: "12 Notes",
    badge: "⭐ Top Contributor & Developer of this website"
  },
  {
    name: "Vikki Kumar",
    role: "Diploma Student | G.P Banka",
    initials: "V.K",
    notes: "2 Notes",
    badge: "Electrical Engg"
  },
  {
    name: "Vinit Raj",
    role: "Diploma Student | G.P Banka",
    initials: "VR",
    notes: "7 Notes",
    badge: "CSE Engg"
  },
  {
    name: "Lovekush Kumar Singh",
    role: "Diploma Student | G.P Banka",
    initials: "LK",
    notes: "6 Notes",
    badge: "Mechnical Engg"
  },
  {
    name: "Raghav Kumar",
    role: "Diploma Student | G.P Banka",
    initials: "RK",
    notes: "1 Notes",
    badge: "Mechnical Engg"
  },
  {
    name: "Annu Priya",
    role: "Diploma Student | G.P Banka",
    initials: "AP",
    notes: "4 Notes",
    badge: "Computer Science Engineer"
  },
  {
    name: "Khushi Kumari",
    role: "Diploma Student | G.P Banka",
    initials: "KK",
    notes: "4 Notes",
    badge: "Mech Engg"
  },
  {
    name: "Varsa Kumari",
    role: "Diploma Student | G.P Banka",
    initials: "VK",
    notes: "6 Notes",
    badge: "CSE Engg"
  },

  {
    name: "Supriya Sargam",
    role: "Diploma Student | G.P Banka",
    initials: "SS",
    notes: "2 Notes",
    badge: "Electrical Engg"
  },



];


/* ================================================================
   3. STATE VARIABLES
   Tracks the currently active category filter and search query.
================================================================ */
let activeFilter = 'all'; // Default: show all categories
let searchQuery = '';     // Default: no search filter


/* ================================================================
   4. RENDER NOTES
   ───────────────
   Reads notesData[], filters by activeFilter & searchQuery,
   then builds HTML cards and injects them into #notesGrid.
   Also triggers the scroll-reveal animation on new cards.
================================================================ */
function renderNotes() {
  const grid = document.getElementById('notesGrid');

  // Filter the notes array
  const filtered = notesData.filter(note => {

    // Category check
    const matchCategory = activeFilter === 'all' || note.category === activeFilter;

    // Search check — searches subject, description, and contributor name
    const q = searchQuery.toLowerCase();
    const matchSearch = !q
      || note.subject.toLowerCase().includes(q)
      || note.desc.toLowerCase().includes(q)
      || note.contributor.toLowerCase().includes(q);

    return matchCategory && matchSearch;
  });

  // Show "no results" message if nothing matched
  if (!filtered.length) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i><br>
        <h3>No notes found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
    return;
  }

  // Build cards HTML
  grid.innerHTML = filtered.map(note => `
    <div class="note-card" data-id="${note.id}">

      <!-- Top Row: Icon + Semester & Size -->
      <div class="card-top">
        <div class="subject-icon">
          <i class="${note.icon}"></i>
        </div>
        <div class="note-meta">
          <div class="note-sem">${note.sem}</div>
          <div class="note-size"><i class="fas fa-file-pdf"></i> ${note.size}</div>
        </div>
      </div>

      <!-- Subject Name -->
      <div class="note-subject">${note.subject}</div>

      <!-- Short Description -->
      <div class="note-desc">${note.desc}</div>

      <!-- Contributor Credit -->
      <div class="note-contributor">
        <div class="contrib-avatar">${note.initials}</div>
        <span>Contributed by <strong>${note.contributor}</strong></span>
      </div>

      <!-- Footer: Category Tag + Download Button -->
      <div class="note-footer">
        <span class="note-category">
          ${note.category.charAt(0).toUpperCase() + note.category.slice(1)}
        </span>
        <button class="download-btn" onclick="downloadNote('${note.subject}', '${note.pdfUrl}')">
          <i class="fas fa-download"></i> Download
        </button>
      </div>

    </div>
  `).join('');

  // Trigger scroll-reveal animation on newly rendered cards
  setTimeout(() => {
    document.querySelectorAll('.note-card').forEach((card, index) => {
      setTimeout(() => card.classList.add('visible'), index * 60);
    });
  }, 50);
}


/* ================================================================
   5. RENDER CONTRIBUTORS
   ──────────────────────
   Builds and injects contributor cards into #contributorsGrid.
================================================================ */
function renderContributors() {
  document.getElementById('contributorsGrid').innerHTML = contributorsData.map(c => `
    <div class="contributor-card">
      <div class="contrib-big-avatar">${c.initials}</div>
      <div class="contrib-name">${c.name}</div>
      <div class="contrib-role">${c.role}</div>
      <div class="contrib-count"><i class="fas fa-book"></i> ${c.notes}</div>
      <div style="margin-top:10px; font-size:.75rem; color:var(--text2)">${c.badge}</div>
    </div>
  `).join('');

  // Trigger scroll-reveal animation
  setTimeout(() => {
    document.querySelectorAll('.contributor-card').forEach((card, index) => {
      setTimeout(() => card.classList.add('visible'), index * 80);
    });
  }, 100);
}


/* ================================================================
   6. CATEGORY FILTER SYSTEM
   ──────────────────────────
   Called when a filter button is clicked.
   Updates activeFilter, highlights the clicked button,
   and re-renders the notes grid.

   Parameters:
   - category : string  → e.g. 'all', 'engineering', 'science'
   - btn      : element → the clicked button (to style as active)
================================================================ */
function setFilter(category, btn) {
  activeFilter = category;

  // Remove 'active' class from all filter buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

  // Add 'active' class to the clicked button
  btn.classList.add('active');

  // Re-render the notes with the new filter
  renderNotes();
}


/* ================================================================
   7. SEARCH FUNCTIONALITY
   ────────────────────────
   Called on every keystroke in the search input (oninput event).
   Updates searchQuery and re-renders the filtered notes.
================================================================ */
function filterNotes() {
  searchQuery = document.getElementById('searchInput').value;
  renderNotes();
}


/* ================================================================
   8. DOWNLOAD BUTTON
   ──────────────────
   Triggered when a note card's Download button is clicked.

   - Shows a toast notification with the subject name.
   - If a real PDF path is provided (not '#'), creates a temporary
     <a> element and triggers a browser download.

   HOW TO LINK REAL PDFs:
   1. Place your PDF in: assets/pdfs/your-file.pdf
   2. In notesData[], set pdfUrl: "assets/pdfs/your-file.pdf"
   3. The download will work automatically.

   Parameters:
   - subject : string → Note subject name (shown in toast)
   - url     : string → Path to the PDF file
================================================================ */
function downloadNote(subject, url) {
  // Show toast notification
  showToast(`📥 Downloading "${subject}"...`);

  // Trigger actual file download if a valid URL is set
  if (url && url !== '#') {
    const link = document.createElement('a');
    link.href = url;
    link.download = subject + '.pdf';
    link.click();
  }
}


/* ================================================================
   9. TOAST NOTIFICATION
   ──────────────────────
   Shows a slide-up toast message at the bottom of the screen.
   Automatically hides after 3.2 seconds.

   Parameters:
   - message : string → Text to show inside the toast
================================================================ */
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;

  toast.classList.add('show');          // Slide up
  setTimeout(() => toast.classList.remove('show'), 3200); // Slide down after 3.2s
}


/* ================================================================
   10. DARK / LIGHT THEME TOGGLE
   ──────────────────────────────
   Toggles the data-theme attribute on <html> between 'dark' and
   'light'. CSS variables automatically update all colors.
   The moon/sun icon in the navbar also switches.
================================================================ */
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

themeBtn.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';

  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});


/* ================================================================
   11. MOBILE HAMBURGER MENU
   ──────────────────────────
   Toggles the mobile dropdown menu open/closed when the
   hamburger button is tapped on small screens.
================================================================ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});

/* Called by onclick="closeMobile()" on each mobile menu link */
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}


/* ================================================================
   12. FLOATING PARTICLES BACKGROUND
   ────────────────────────────────────
   Creates 25 small circle elements with randomised sizes,
   positions, and animation durations. They float upward
   continuously via the CSS @keyframes float animation.
================================================================ */
function createParticles() {
  const container = document.getElementById('particles');

  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 6 + 3; // Size between 3px and 9px

    particle.style.cssText = `
      width            : ${size}px;
      height           : ${size}px;
      left             : ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay  : ${Math.random() * 15}s;
      opacity          : ${Math.random() * 0.15 + 0.05};
    `;

    container.appendChild(particle);
  }
}


/* ================================================================
   13. SCROLL EVENT HANDLER
   ─────────────────────────
   Handles multiple scroll-based features:

   a) Back To Top Button — shown after scrolling 400px
   b) Active Navbar Link — highlights the section currently in view
   c) Scroll Reveal — animates contributor cards into view
================================================================ */
window.addEventListener('scroll', () => {

  /* a) Back To Top Button visibility */
  const backTop = document.getElementById('backTop');
  backTop.classList.toggle('show', window.scrollY > 400);

  /* b) Active navbar link highlighting
        Loops through all sections and checks which one
        the user has scrolled past. */
  const sections = ['home', 'notes', 'upload', 'contributors', 'about', 'contact'];
  let currentSection = '';

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) {
      currentSection = id;
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
  });

  /* c) Scroll reveal for contributor cards
        Cards start hidden (opacity:0) and become visible
        when they enter the viewport. */
  document.querySelectorAll('.contributor-card:not(.visible)').forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 60) {
      card.classList.add('visible');
    }
  });
});


/* ================================================================
   14. LOADING SCREEN
   ───────────────────
   Waits for the full page to load, then hides the loader overlay
   after a 2-second delay (matches the CSS loader animation time).
================================================================ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2000);
});


/* ================================================================
   15. INITIALISATION
   ───────────────────
   Runs when the script first loads:
   1. Create particle background
   2. Render note cards into the grid
   3. Render contributor cards
================================================================ */
createParticles();
renderNotes();
renderContributors();