/* ================================================================
   script.js — StudyVault Notes Platform
   Author  : StudyVault Team
   Purpose : All interactive functionality including:
             - Contributors rendering
             - Download with toast notification
             (Notes browsing/search now in notes-data.js / notes.js)
             - Theme (dark/light) toggle
             - Mobile hamburger menu
             - Floating particles background
             - Scroll animations & active nav tracking
             - Back to top button
             - Loading screen
================================================================ */




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
   3. RENDER CONTRIBUTORS
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
   NOTE: Notes browsing/search/filter logic (Programs → Branch →
   Year → Semester → Resource Type → Subject → Resources) now
   lives in notes-data.js (data) and notes.js (rendering/nav),
   loaded alongside this file. downloadNote() below is still the
   single shared function they call to trigger a download.
================================================================ */


/* ================================================================
   8. DOWNLOAD BUTTON
   ──────────────────
   Triggered when a note card's Download button is clicked.

   - Shows a toast notification with the subject name.
   - If a real PDF path is provided (not '#'), creates a temporary
     <a> element and triggers a browser download.

   HOW TO LINK REAL PDFs:
   1. Place your PDF in: assets/pdfs/your-file.pdf
   2. In notes-data.js, set pdfUrl: "assets/pdfs/your-file.pdf"
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
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     document.getElementById('loader').classList.add('hide');
//   }, 2000);
// });


/* ================================================================
   15. INITIALISATION
   ───────────────────
   Runs when the script first loads:
   1. Create particle background
   2. Render note cards into the grid
   3. Render contributor cards
================================================================ */
createParticles();
renderContributors();