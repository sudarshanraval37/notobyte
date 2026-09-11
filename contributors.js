/* ================================================================
   contributors.js — NotoByte Top Contributors of the Month
================================================================ */

// Har mahine bas is array ka data update karna hoga
const monthlyContributors = [
  {
    name: "Khushi Kumari",
    notes: "2 Notes",
    branch: "Mechanical Engineering",
    sem: "Alumni",
    college: "Batch 2023 G.P Banka"
  },
  {
    name: "Sudarshan Raval",
    notes: "12 notes",
    branch: "Comp Sci. Engg",
    sem: "3rd Sem",
    college: "BCE Bakhtiyarpur"
  },
  {
    name: "Vikki Kumar",
    notes: "6 Notes",
    branch: "Electrical",
    sem: "3rd Sem",
    college: "BCE Bakhtiyarpur"
  },
  {
    name: "Aman Gupta",
    notes: "10 Notes",
    branch: "Electrical",
    sem: "5th Sem",
    college: "BCE Bhagalpur"
  }
];

let currentSlideIndex = 0;
let slideInterval = null;

function renderTopContributors() {
  const slider = document.getElementById('contributorSlider');
  const dotsContainer = document.getElementById('contributorDots');
  if (!slider || !dotsContainer) return;

  slider.innerHTML = '';
  dotsContainer.innerHTML = '';

  monthlyContributors.forEach((item, idx) => {
    // 1. Create slide card
    const slide = document.createElement('div');
    slide.className = 'contributor-slide';
    slide.innerHTML = `
      <span class="contrib-badge"><i class="fas fa-medal"></i> ${item.notes}</span>
      <h3 class="contrib-name">${item.name}</h3>
      <p class="contrib-sub">${item.branch} • ${item.sem}</p>
      <div class="contrib-college"><i class="fas fa-building-columns"></i> ${item.college}</div>
    `;
    slider.appendChild(slide);

    // 2. Create dot indicator
    const dot = document.createElement('span');
    dot.className = `contrib-dot ${idx === 0 ? 'active' : ''}`;
    dot.onclick = () => goToContributorSlide(idx);
    dotsContainer.appendChild(dot);
  });

  startContributorAutoSlide();
}

function updateSlidePosition() {
  const slider = document.getElementById('contributorSlider');
  const dots = document.querySelectorAll('.contrib-dot');
  if (!slider) return;

  slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentSlideIndex);
  });
}

function moveContributorSlide(step) {
  currentSlideIndex += step;
  if (currentSlideIndex >= monthlyContributors.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = monthlyContributors.length - 1;
  }
  updateSlidePosition();
  resetContributorTimer();
}

function goToContributorSlide(index) {
  currentSlideIndex = index;
  updateSlidePosition();
  resetContributorTimer();
}

function startContributorAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    moveContributorSlide(1);
  }, 2000); // 3.5 seconds me auto-slide hoga
}

function resetContributorTimer() {
  clearInterval(slideInterval);
  startContributorAutoSlide();
}

// Page load hone par run karega
document.addEventListener('DOMContentLoaded', () => {
  renderTopContributors();
});