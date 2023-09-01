const carrusel = document.querySelector('.carrusel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarrusel();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < carrusel.children.length - 1) {
    currentIndex++;
    updateCarrusel();
  }
});

function updateCarrusel() {
  const offset = -currentIndex * 100; // 100% width per item
  carrusel.style.transform = `translateX(${offset}%)`;
}