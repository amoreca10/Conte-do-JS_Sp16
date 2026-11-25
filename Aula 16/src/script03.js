// Eventos

// Eventos de teclado

// Eventos Keydwon
const input = document.querySelector("#ex1-input");
const paragrafo = document.querySelector("#ex1-p");

let texto = "";

input.addEventListener("keydown",(evento) =>{
    if (evento.key.length === 1){
        texto += evento.key; 
    }else if (evento.key === "Backspace"){
        texto = texto.slice(0, -1);
    }
    paragrafo.innerHTML =`O conteúdo digitado foi: ${texto}`;

});

//input.addEventListener("keydown", (evento) => {
 //paragrafo.innerHTML = `A tecla pressionada foi: ${evento.key}`;
//});

