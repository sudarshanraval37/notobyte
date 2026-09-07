/* ================================================================
   script.js — NotoByte
   ----------------------------------------------------------------
   Shared low-level helpers used across the app:
     - downloadNote()  → triggers a resource download + toast
     - showToast()     → slide-up toast notification

   Everything else (theme, menu, particles, hero, contributors,
   old navbar) has been removed — it belonged to the old website
   layout and has no place in the new app-style UI. Screen routing
   now lives in app.js; Notes/Syllabus/Quiz logic lives in their
   own notes.js / syllabus.js / quiz.js files.
================================================================ */

/* ----------------------------------------------------------------
   DOWNLOAD BUTTON
   Triggered when a note card's Download button is clicked.

   - Shows a toast notification with the subject name.
   - If a real PDF path is provided (not '#'), creates a temporary
     <a> element and triggers a browser download.

   HOW TO LINK REAL PDFs:
   1. Place your PDF in: assets/pdfs/your-file.pdf
   2. In notes-data.js, set pdfUrl: "assets/pdfs/your-file.pdf"
   3. The download will work automatically.
---------------------------------------------------------------- */
function downloadNote(subject, url) {
  showToast(`📥 Downloading "${subject}"...`);

  if (url && url !== '#') {
    const link = document.createElement('a');
    link.href = url;
    link.download = subject + '.pdf';
    link.click();
  }
}

/* ----------------------------------------------------------------
   TOAST NOTIFICATION
   Shows a slide-up toast message at the bottom of the screen.
   Automatically hides after 3.2 seconds.
---------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = message;

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}