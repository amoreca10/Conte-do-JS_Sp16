// Compreendendo DOM

// Alterando o HTML

// Alterando Conteúdo de Elemento com  o JavaScript
const elemento1 = document.querySelector("#ex1");

elemento1.innerHTML = "Somente a dor coletiva gera a união.";

// Alterando Atributo de Elelemento com o JavaScript

const elemento2 = document.querySelector("#ex2");

elemento2.src = "./img/OIP.jpeg";

// Adicionando contéudo dinâmico com o JavaScript
const elemento3 = document.querySelector("#ex3");

elemento3.innerHTML = Date();
