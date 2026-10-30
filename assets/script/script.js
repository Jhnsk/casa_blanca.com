const carousel = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const indicators = document.querySelector(".carousel-indicators");

let currentIndex = 0;
let autoplay;

// Criar indicadores automaticamente
items.forEach((item, index) => {
  const button = document.createElement("button");

  button.setAttribute("aria-label", `Ir para o banner ${index + 1}`);

  if (index === 0) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    goToSlide(index);
  });

  indicators.appendChild(button);
});

const dots = indicators.querySelectorAll("button");

// Atualizar indicador ativo
function updateIndicators(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

// Ir para um banner específico
function goToSlide(index) {
  carousel.scrollTo({
    left: index * carousel.clientWidth,
    behavior: "smooth",
  });

  updateIndicators(index);
}

// Detectar quando o usuário arrasta o carrossel
carousel.addEventListener("scroll", () => {
  const index = Math.round(carousel.scrollLeft / carousel.clientWidth);

  updateIndicators(index);
});

// Próximo banner
function nextSlide() {
  const nextIndex = (currentIndex + 1) % items.length;

  goToSlide(nextIndex);
}

// Iniciar autoplay
function startAutoplay() {
  stopAutoplay();

  autoplay = setInterval(() => {
    nextSlide();
  }, 4000);
}

// Parar autoplay
function stopAutoplay() {
  clearInterval(autoplay);
}

// Pausar quando o usuário interagir
carousel.addEventListener("pointerdown", stopAutoplay);
carousel.addEventListener("mouseenter", stopAutoplay);
carousel.addEventListener("mouseleave", startAutoplay);

carousel.addEventListener("focusin", stopAutoplay);
carousel.addEventListener("focusout", startAutoplay);

// Respeitar preferência por movimento reduzido
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  startAutoplay();
}

const categories = document.querySelectorAll('.category_item');

categories.forEach(category => {
    category.addEventListener('click', () => {
        categories.forEach(item => {
            item.classList.remove('active');
        });

        category.classList.add('active');
    });
});