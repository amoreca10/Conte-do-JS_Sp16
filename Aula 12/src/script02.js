// Objetos

// Criando objetos com construtores
function Carro(marca, modelo, ano, quantidadeRodas, cor){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this. quantidadeRodas = quantidadeRodas;
    this. cor = cor;
}

const carroLucas = new Carro("Hyndai", "I30", 2012, 5 ,"preto" );

const carroLucas2 = new Carro ("Ford", "Fusion", 2015, 5, "prata");


carroLucas.quilometragem = 80000;
carroLucas2.aroRoda = 17;

console.log(carroLucas);

console.log(carroLucas2);


const carroLaiza = new Carro ("Honda", "Civic", 2002, 4, "vermelho" );

console.log(carroLaiza);

