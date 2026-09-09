/* ================================================================
   app.js — NotoByte App Shell
   ----------------------------------------------------------------
   Drives the top-level mobile-app screen switching (Home / Notes /
   Syllabus / Quiz), the header dropdown menu, the theme toggle, and
   wires the home-screen tiles to the existing Notes/Syllabus/Quiz
   entry points.
================================================================ */

/* ----------------------------------------------------------------
   1. SCREEN ROUTER
   Only one .app-screen is visible at a time. Switching screens
   always scrolls back to the top and closes the header menu.
---------------------------------------------------------------- */
function appShowScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId + 'Screen');
    if (target) target.classList.add('active');

    appCloseMenu();
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* ----------------------------------------------------------------
   2. HEADER DROPDOWN MENU
---------------------------------------------------------------- */
function appToggleMenu() {
    document.getElementById('appMenu').classList.toggle('open');
}

function appCloseMenu() {
    document.getElementById('appMenu').classList.remove('open');
}

// Close the menu when tapping anywhere outside it
document.addEventListener('click', (e) => {
    const menu = document.getElementById('appMenu');
    const btn = document.getElementById('appMenuBtn');
    if (!menu || !btn) return;
    if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
        appCloseMenu();
    }
});

/* ----------------------------------------------------------------
   3. THEME TOGGLE (Light default — matches the app design. Dark
   theme available for users who prefer it.)
---------------------------------------------------------------- */
function appToggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    const icon = document.getElementById('appThemeIcon');
    if (icon) icon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    appCloseMenu();
}

/* ----------------------------------------------------------------
   4. HOME SEARCH BAR
   The single search input lives on the Home screen and doubles as
   #notesSearchInput (read directly by notes.js). Results render
   right there on the Home screen — searching never navigates away
   from the search box, so it's always reachable to edit/clear.
---------------------------------------------------------------- */
function appHandleHomeSearch() {
    const val = document.getElementById('notesSearchInput').value.trim();

    notesHandleSearch(); // populates #notesSearchResults / #notesSearchResultsCount

    document.getElementById('homeSearchResults').style.display = val ? 'block' : 'none';
    document.getElementById('homeSections').style.display = val ? 'none' : 'block';
}

function appFilterTap() {
    showToast('🔧 Filters are coming soon!');
}

/* ----------------------------------------------------------------
   5. HOME TILE HANDLERS
   Each tile on the Home screen opens the relevant screen and drives
   straight into the right entry point of the existing Notes /
   Syllabus / Quiz logic.
---------------------------------------------------------------- */

/* ---- Notes & PYQ tiles ---- */
function appOpenNotes(programId) {
    appShowScreen('notes');
    if (programId === 'other') {
        notesShowUncategorized();
    } else {
        notesSelectProgram(programId);
    }
}

/* ---- Syllabus Hub tiles ---- */
function appOpenSyllabus(programId) {
    const program = syllabusData.programs.find(p => p.id === programId);
    if (!program || !program.branches.length) {
        showToast(`📘 ${program ? program.title : 'This section'} syllabus is coming soon!`);
        return;
    }
    appShowScreen('syllabus');
    syllabusOpenProgram(programId);
}

/* ---- Quiz Zone tiles ---- */
function appOpenQuiz(programId) {
    if (programId !== 'btech') {
        showToast('🧠 Quizzes for this section are coming soon!');
        return;
    }
    appShowScreen('quiz');
    quizBackToDashboard();
}


/* ----------------------------------------------------------------
   5. ANDROID SYSTEM BACK BUTTON
   ----------------------------------------------------------------
   Handles the physical/system Android Back button without changing
   the existing on-screen navigation buttons.

   Navigation priority:
   - Notes: Resources → Subject → Category → Semester → Year → Branch → Home
   - Syllabus: Subjects → Semester → Branch/Program → Home
   - Quiz: Result → Quiz → Previous Question → Subject → Dashboard → Home
   - Home: exit the Android app
---------------------------------------------------------------- */
function appExitAndroidApp() {
    try {
        const App = window.Capacitor?.Plugins?.App;
        if (App?.exitApp) {
            App.exitApp();
            return;
        }
    } catch (error) {
        console.warn('NotoByte: Unable to exit app via Capacitor.', error);
    }

    // Browser fallback: do nothing rather than accidentally leaving
    // the app/webview when the Capacitor App plugin is unavailable.
}

function appGetActiveScreenId() {
    const active = document.querySelector('.app-screen.active');
    return active ? active.id : 'homeScreen';
}

function appHandleAndroidBack() {
    const activeScreen = appGetActiveScreenId();

    /* ---------------- NOTES ---------------- */
    if (activeScreen === 'notesScreen') {
        // Search results are rendered on Home, so normal Notes navigation
        // can be handled entirely from notesState.
        if (typeof notesState !== 'undefined') {
            if (notesState.subject) {
                notesState.subject = null;
                notesGoToSubjects();
                return;
            }
            if (notesState.resourceType) {
                notesState.resourceType = null;
                notesGoToTypes();
                return;
            }
            if (notesState.semester) {
                notesState.semester = null;
                notesGoToSemesters();
                return;
            }
            if (notesState.year) {
                notesState.year = null;
                notesGoToYears();
                return;
            }
            if (notesState.branch) {
                notesState.branch = null;
                notesGoToBranches();
                return;
            }
            if (notesState.program) {
                notesState.program = null;
                notesGoToPrograms();
                return;
            }
        }

        appShowScreen('home');
        return;
    }

    /* ---------------- SYLLABUS ---------------- */
    if (activeScreen === 'syllabusScreen') {
        if (typeof syllabusState !== 'undefined') {
            if (syllabusState.expandedSubject) {
                syllabusState.expandedSubject = null;
                const semester = syllabusGetSemester(syllabusState.program, syllabusState.branch, syllabusState.semester);
                if (semester) syllabusRenderSubjectList(semester);
                return;
            }
            if (syllabusState.semester) {
                syllabusState.semester = null;
                syllabusGoToSemesters();
                return;
            }
            if (syllabusState.branch) {
                syllabusState.branch = null;
                syllabusGoToBranches();
                return;
            }
            if (syllabusState.program) {
                syllabusState.program = null;
                appShowScreen('home');
                return;
            }
        }

        appShowScreen('home');
        return;
    }

    /* ---------------- QUIZ ---------------- */
    if (activeScreen === 'quizScreen') {
        const playView = document.getElementById('quizPlayView');
        const resultView = document.getElementById('quizResultView');
        const subjectView = document.getElementById('quizSubjectView');
        const dashboardView = document.getElementById('quizDashboard');

        if (resultView?.classList.contains('active')) {
            quizExitToSubject();
            return;
        }

        if (playView?.classList.contains('active')) {
            if (typeof quizState !== 'undefined' && quizState.currentIndex > 0) {
                quizPrevQuestion();
            } else {
                quizExitToSubject();
            }
            return;
        }

        if (subjectView?.classList.contains('active')) {
            quizBackToDashboard();
            return;
        }

        if (dashboardView?.classList.contains('active')) {
            appShowScreen('home');
            return;
        }

        appShowScreen('home');
        return;
    }

    /* ---------------- HOME ---------------- */
    // Only when already at Home should the Android Back button exit.
    appExitAndroidApp();
}

function appInitAndroidBackButton() {
    try {
        const App = window.Capacitor?.Plugins?.App;
        if (!App?.addListener) {
            console.warn('NotoByte: Capacitor App plugin not available. Android Back handler not registered.');
            return;
        }

        App.addListener('backButton', () => {
            appHandleAndroidBack();
        });
    } catch (error) {
        console.warn('NotoByte: Android Back handler could not be registered.', error);
    }
}

/* ----------------------------------------------------------------
   6. INITIALISE
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    appShowScreen('home');
    appInitAndroidBackButton();
});
