d = document;

const slider = d.querySelector(".slider");
const slide = d.querySelectorAll(".slide");
const flechaIzquierda = d.querySelector(".controles i:nth-child(1)");
const flechaDerecha = d.querySelector(".controles i:nth-child(2)");
const puntosWrapper = d.querySelector(".puntos");
const puntos = d.querySelectorAll(".puntos span");

let slideIndex = 0;

puntos.forEach((puntos, indice) => {
  puntos.addEventListener("click", () => {
    slideIndex = indice;
    d.querySelector(".puntos .active").classList.remove("active");
    slider.style.transform = `translateX(${slideIndex * -20}%)`;
    puntos.classList.add("active");
  });
});

flechaIzquierda.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  d.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});

flechaDerecha.addEventListener("click", () => {
  slideIndex =
    slideIndex < slide.length - 1 ? slideIndex + 1 : slide.length - 1;
  d.querySelector(".puntos .active").classList.remove("active");
  slider.style.transform = `translateX(${slideIndex * -20}%)`;
  puntosWrapper.children[slideIndex].classList.add("active");
});
