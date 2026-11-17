// Objetos 

// Propriedades de Objetos

const pessoa = {
    nome: "Lucas",
    altura: 1.72,
    idade: 20,
};

console.log(pessoa);


//let respostaUsuario = prompt("Informe o indentificador pessoa:");
//console.log(pessoa[respostaUsuario]);;

console.log(pessoa.nome);

console.log("");

// Alterando , Adcionando, e excluíndo propriedades.
pessoa.idade = 21;

console.log(pessoa);

console.log("");

pessoa.ultimoNome = "Amorim";
console.log(pessoa);

console.log("");

// Delete propriedade
delete pessoa.altura

console.log(pessoa);

console.log("");

// Verificando existência de Propriedade em objeto
let testePropriedade = ("idade" in pessoa);

console.log(testePropriedade);

console.log("")

// Objetos Aninhados

const pessoa2 ={
     nome: "Tim",
     sobrenome: "Bernardes",
     profissão: "músico",
     instrumento: {
                 tipo: "cordas",
                 material: "madeira",
     },
};

console.log(pessoa2.instrumento);




console.log("");

// Métodos de Objeto
const carro = {
    marca: "Toyota",
    modelo: "Supra",
    ano: 1998,
    acelerar: function (){
        return `O ${this.marca} ${this.modelo} acelerou.`;
    },
}; 

console.log(carro.acelerar());

console.log();

// Adicionando Método em Objeto.
carro.derrapar = function(){
    return `O ${this.marca} ${this.modelo} derrapou.`
};

console.log(carro.derrapar());

console.log("");

