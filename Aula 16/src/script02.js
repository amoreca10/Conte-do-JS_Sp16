// Eventos

// Eventos de mouse com o JavaScript

// Eventos Mouseover e Mouseout
const paragrafo = document.querySelector("#ex1-p");

paragrafo.addEventListener("mouseover", () => {
  paragrafo.innerHTML = "O mouse está sobre o elemento.";
  paragrafo.classList.add("estilo-texto");
  paragrafo.classList.remove("estilo-borda");
});

paragrafo.addEventListener("mouseout", () => {
  paragrafo.innerHTML = "O mouse está fora do elemento.";
  paragrafo.classList.add("estilo-borda");
  paragrafo.classList.remove("estilo-texto");
});

// Mostrando a posição de mouse com o evento mousemove
const paragrafoX = document.querySelector("#paragrafoX");
const paragrafoY = document.querySelector("#paragrafoY");

document.addEventListener("mousemove", (evento) => {
    paragrafoX.innerHTML = `X: ${evento.clientX}`;
    paragrafoY.innerHTML = `Y: ${evento.clientY}`;
});
