// Eventos

// Evento de click com o addEventlistener()


// botao.// Evento de click com o addEventlistener("click, adcionarEstilo ");


const paragrafo = document.querySelector("#ex1-p");
const botao = document.querySelector("#ex1-btn");

botao.addEventListener("click", ()=> {
paragrafo.classList.toggle("estilo");
paragrafo.innerHTML = "Palmeiras não tem mundial";
});


// botao.// Evento de click com o addEventlistener("click, adcionarEstilo ");

//botao.addEventListener("click",adicionarEstilo);

//function adicionarEstilo(){
    //paragrafo.classList.add("estilo");
    //paragrafo.innerHTML = "Palmeiras não tem mundial";
//}

// 