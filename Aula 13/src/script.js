// Arrays 

// Criando arrays

const frutas = ["Maça", "Morango", "Maracujá"];

console.log(frutas);

console.log("");

// Adicionando Elemento em Array Vazio

const carros = [];

carros[0] = "Bmw";
carros[1] = "Volkswagen";
carros[2] = "Fiat";

console.log(carros);

console.log("");

// Criando Array com Construtor de Array
const frutas2 = new Array ("Caju", "Uva","Laranja");

console.log(frutas2);

console.log("");

// Acessando Elementos de Array

const carros2 = ["Kia", "Mini", "Toyota"];

console.log(carros2);
  
let primeiroCarro = carros2[0];

console.log("");

// Alterando Elemento de Array
const frutas3 = ["Melão", "Abacate","Goiaba"];

frutas3[0] = "Banana";

console.log(frutas3);

console.log("")

// Convertendo Array em String

const motos = ["CB 500", "Mt-07", "XJ6"];

console.log(motos);

let motoString = motos.toString();

console.log(motoString);

console.log();

// Verificando tipo de Dado em Array

console.log(typeof motos);

console.log();

// Objeto Array 

const carro1 = {
    marca:"Porshe;",
    modelo:  "(911 GT3",
};

const carro2 = {
    marca: "Porshe",
    modelo: "718 GT4",
};

const carros3 = [carro1, carro2];

console.log(carros3);

console.log("");

// Propriedade Length em Array
const alunos = ["Laiza", "André", "Marcela","Molina", "Deborah", "Amorim"];

console.log(alunos);

let comprimentosAlunos = alunos.length;

console.log(comprimentosAlunos);

console.log("");

// Acessando o Último Elemento de Array
let ultimoAlunos = alunos.length - 1; 

console.log(alunos[ultimoAlunos]);

console.log("");

// Utilizando laço de Repetição para Percorrer Array 
const cidades = ["São Paulo", "Campinas", "Campos do Jordão",];
console.log(cidades);

let quantidadeCidades = cidades.length;
console.log(quantidadeCidades);

for (let acumuladora = 0; acumuladora < quantidadeCidades;  acumuladora ++){
    console.log(cidades[acumuladora]);
}

console.log("");

// Utilizando Método forEach() para Percorrer Array

//cidades.forEach(listarCidades);

//function listarCidades(cidades){
    //console.log(cidades)
//};

cidades.forEach( (cidades) => {
    console.log(cidades);
});

console.log("");

// Adicionando Elementos no Array com Método push()
const cores = ["Azul", "Laranja", "Vermelho"];

console.log(cores);

cores.push("verde");

console.log(cores);

cores.push("Branco","Preto");

console.log(cores);

console.log("");

// /adicionando Elemento no Array na Propriedade Length
cores[cores.length] = "Rosa";

console.log(cores);

console.log("");

// Buracos indefinidos em Array
cores [14] = "Roxo";

console.log(cores);

console.log("");

