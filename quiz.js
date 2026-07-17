/* ================================================================
   quiz.js — NotoByte Quiz Section
   Purpose : All interactive logic for the Quiz Zone.
             Reads data from questions.js (quizData) — never edit
             quiz logic just to add a new subject/quiz/question,
             only questions.js needs to change for that.

   STATE MACHINE (4 views, only one visible at a time):
     Dashboard  → Subject View → Quiz Play View → Result View
================================================================ */

/* ----------------------------------------------------------------
   0. CURRENT QUIZ STATE
   Holds everything about the quiz currently in progress.
---------------------------------------------------------------- */
const quizState = {
    subjectId: null,
    semesterId: null,   // null for "flat" subjects with no semesters
    quizId: null,
    questions: [],
    currentIndex: 0,
    answers: [],        // answers[i] = selected option index, or null if unanswered
};


/* ----------------------------------------------------------------
   1. VIEW SWITCHING HELPER
---------------------------------------------------------------- */
function quizShowView(viewId) {
    document.querySelectorAll('.quiz-view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* ----------------------------------------------------------------
   2. DASHBOARD — RENDER SUBJECT CARDS
---------------------------------------------------------------- */
function quizRenderDashboard() {
    const grid = document.getElementById('quizSubjectsGrid');
    grid.innerHTML = quizData.subjects.map(subject => `
        <div class="quiz-subject-card" style="--card-color:${subject.color || 'var(--accent)'}">
            <div class="quiz-subject-icon"><i class="${subject.icon}"></i></div>
            <h3>${subject.name}</h3>
            <p>${subject.desc}</p>
            <button class="btn btn-primary" onclick="quizOpenSubject('${subject.id}')">
                <i class="fas fa-play"></i> Start Quiz
            </button>
        </div>
    `).join('');
}


/* ----------------------------------------------------------------
   3. SUBJECT VIEW — SEMESTERS + QUIZ LIST
---------------------------------------------------------------- */
function quizOpenSubject(subjectId) {
    const subject = quizData.subjects.find(s => s.id === subjectId);
    if (!subject) return;

    quizState.subjectId = subjectId;
    quizState.semesterId = subject.semesters ? subject.semesters[0].id : null;

    // Header
    document.getElementById('quizSubjectHeader').innerHTML = `
        <div class="quiz-subject-icon" style="--card-color:${subject.color || 'var(--accent)'}; background:${subject.color || 'var(--accent)'}">
            <i class="${subject.icon}"></i>
        </div>
        <div>
            <h2>${subject.name}</h2>
            <p>${subject.desc}</p>
        </div>
    `;

    // Semester tabs (only shown if this subject has semesters)
    const tabsWrap = document.getElementById('quizSemesterTabs');
    if (subject.semesters) {
        tabsWrap.style.display = 'flex';
        tabsWrap.innerHTML = subject.semesters.map(sem => `
            <button class="quiz-sem-tab ${sem.id === quizState.semesterId ? 'active' : ''}"
                    onclick="quizSelectSemester('${sem.id}')">${sem.name}</button>
        `).join('');
    } else {
        tabsWrap.style.display = 'none';
        tabsWrap.innerHTML = '';
    }

    quizRenderQuizList();
    quizShowView('quizSubjectView');
}

function quizSelectSemester(semesterId) {
    quizState.semesterId = semesterId;
    // Update active tab styling
    document.querySelectorAll('.quiz-sem-tab').forEach(tab => tab.classList.remove('active'));
    const idx = [...document.querySelectorAll('.quiz-sem-tab')].findIndex(tab =>
        tab.getAttribute('onclick') === `quizSelectSemester('${semesterId}')`);
    if (idx > -1) document.querySelectorAll('.quiz-sem-tab')[idx].classList.add('active');

    quizRenderQuizList();
}

/* Returns the array of quizzes for whatever is currently selected
   (works for both semester-based and flat subjects). */
function quizGetCurrentQuizList() {
    const subject = quizData.subjects.find(s => s.id === quizState.subjectId);
    if (!subject) return [];
    if (subject.semesters) {
        const sem = subject.semesters.find(s => s.id === quizState.semesterId);
        return sem ? sem.quizzes : [];
    }
    return subject.quizzes || [];
}

function quizRenderQuizList() {
    const list = quizGetCurrentQuizList();
    const grid = document.getElementById('quizListGrid');

    grid.innerHTML = list.map(quiz => {
        const locked = quiz.comingSoon || !quiz.questions || quiz.questions.length === 0;
        return `
        <div class="quiz-card ${locked ? 'quiz-card-locked' : ''}">
            ${locked ? '<span class="quiz-badge-soon">Coming Soon</span>' : ''}
            <div class="quiz-card-icon"><i class="${quiz.icon}"></i></div>
            <h4>${quiz.title}</h4>
            <div class="quiz-card-meta"><i class="fas fa-list-check"></i> ${locked ? 'Not available yet' : quiz.questions.length + ' MCQs'}</div>
            ${locked
                ? `<button class="btn btn-outline" disabled><i class="fas fa-lock"></i> Locked</button>`
                : `<button class="btn btn-primary" onclick="quizStartQuiz('${quiz.id}')"><i class="fas fa-play"></i> Start Quiz</button>`
            }
        </div>`;
    }).join('');
}

function quizBackToDashboard() {
    quizShowView('quizDashboard');
}

function quizExitToSubject() {
    quizShowView('quizSubjectView');
}


/* ----------------------------------------------------------------
   4. QUIZ PLAY — START, RENDER QUESTION, ANSWER, NAVIGATE
---------------------------------------------------------------- */
function quizStartQuiz(quizId) {
    const list = quizGetCurrentQuizList();
    const quiz = list.find(q => q.id === quizId);
    if (!quiz || !quiz.questions.length) return;

    quizState.quizId = quizId;
    quizState.questions = quiz.questions;
    quizState.currentIndex = 0;
    quizState.answers = new Array(quiz.questions.length).fill(null);

    document.getElementById('quizPlayTitle').textContent = quiz.title;

    quizRenderQuestion();
    quizShowView('quizPlayView');
}

function quizRenderQuestion() {
    const idx = quizState.currentIndex;
    const total = quizState.questions.length;
    const question = quizState.questions[idx];
    const selected = quizState.answers[idx];

    // Progress text + animated bar
    document.getElementById('quizProgressText').textContent = `Question ${idx + 1} / ${total}`;
    document.getElementById('quizProgressFill').style.width = `${((idx + 1) / total) * 100}%`;

    // Question text
    document.getElementById('quizQuestionText').textContent = question.q;

    // Options
    const letters = ['A', 'B', 'C', 'D'];
    const optionsWrap = document.getElementById('quizOptions');
    optionsWrap.innerHTML = question.o.map((optionText, i) => {
        let stateClass = '';
        let icon = '';
        if (selected !== null) {
            stateClass = 'quiz-option-disabled';
            if (i === question.a) {
                stateClass += ' quiz-option-correct';
                icon = '<i class="fas fa-circle-check quiz-option-icon"></i>';
            } else if (i === selected) {
                stateClass += ' quiz-option-wrong';
                icon = '<i class="fas fa-circle-xmark quiz-option-icon"></i>';
            }
        }
        return `
            <div class="quiz-option ${stateClass}" ${selected === null ? `onclick="quizSelectOption(${i})"` : ''}>
                <span class="quiz-option-letter">${letters[i]}</span>
                <span>${optionText}</span>
                ${icon}
            </div>`;
    }).join('');

    // Explanation
    const explanationBox = document.getElementById('quizExplanation');
    if (selected !== null && question.e) {
        explanationBox.innerHTML = `<strong>Explanation:</strong> ${question.e}`;
        explanationBox.classList.add('show');
    } else {
        explanationBox.classList.remove('show');
        explanationBox.innerHTML = '';
    }

    // Nav buttons
    document.getElementById('quizPrevBtn').disabled = idx === 0;
    const nextBtn = document.getElementById('quizNextBtn');
    nextBtn.disabled = selected === null;
    nextBtn.innerHTML = (idx === total - 1)
        ? 'See Result <i class="fas fa-flag-checkered"></i>'
        : 'Next <i class="fas fa-arrow-right"></i>';
}

function quizSelectOption(optionIndex) {
    const idx = quizState.currentIndex;
    if (quizState.answers[idx] !== null) return; // already answered, ignore
    quizState.answers[idx] = optionIndex;
    quizRenderQuestion();
}

function quizNextQuestion() {
    if (quizState.answers[quizState.currentIndex] === null) return; // must answer first

    if (quizState.currentIndex === quizState.questions.length - 1) {
        quizFinishQuiz();
    } else {
        quizState.currentIndex++;
        quizRenderQuestion();
    }
}

function quizPrevQuestion() {
    if (quizState.currentIndex === 0) return;
    quizState.currentIndex--;
    quizRenderQuestion();
}


/* ----------------------------------------------------------------
   5. RESULT VIEW
---------------------------------------------------------------- */
function quizFinishQuiz() {
    const total = quizState.questions.length;
    let correct = 0;
    let attempted = 0;

    quizState.questions.forEach((q, i) => {
        if (quizState.answers[i] !== null) {
            attempted++;
            if (quizState.answers[i] === q.a) correct++;
        }
    });

    const wrong = attempted - correct;
    const percentage = Math.round((correct / total) * 100);

    let emoji = '💪', message = 'Needs Improvement';
    if (percentage >= 90) { emoji = '🎉'; message = 'Excellent'; }
    else if (percentage >= 75) { emoji = '🌟'; message = 'Very Good'; }
    else if (percentage >= 50) { emoji = '👍'; message = 'Good'; }

    document.getElementById('quizResultCard').innerHTML = `
        <div class="quiz-result-emoji">${emoji}</div>
        <div class="quiz-result-message">${message}!</div>
        <p class="quiz-result-sub">Here's how you performed on this quiz.</p>

        <div class="quiz-score-circle" style="--pct:${percentage}">
            <span class="quiz-score-pct">${percentage}%</span>
            <span class="quiz-score-label">Score</span>
        </div>

        <div class="quiz-result-stats">
            <div class="quiz-result-stat"><div class="val">${total}</div><div class="label">Total</div></div>
            <div class="quiz-result-stat"><div class="val">${attempted}</div><div class="label">Attempted</div></div>
            <div class="quiz-result-stat" style="color:#2ecc71"><div class="val">${correct}</div><div class="label">Correct</div></div>
            <div class="quiz-result-stat" style="color:#ff5c7a"><div class="val">${wrong}</div><div class="label">Wrong</div></div>
        </div>

        <div class="quiz-result-btns">
            <button class="btn btn-primary" onclick="quizRetry()"><i class="fas fa-rotate-right"></i> Retry Quiz</button>
            <button class="btn btn-outline" onclick="quizBackToDashboard()"><i class="fas fa-grip"></i> Back to Dashboard</button>
        </div>
    `;

    quizShowView('quizResultView');
}

function quizRetry() {
    quizState.currentIndex = 0;
    quizState.answers = new Array(quizState.questions.length).fill(null);
    quizRenderQuestion();
    quizShowView('quizPlayView');
}


/* ----------------------------------------------------------------
   6. INITIALIZE — Build the dashboard as soon as the page loads.
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', quizRenderDashboard);
// Fallback in case this script loads after DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    quizRenderDashboard();
}
