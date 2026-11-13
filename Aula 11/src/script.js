// Objetos

// Exemplo de objeto simples
const carro = {
    marca:"Porshe",
    modelo: 911,
    ano: 2022,
    acelerar: function() {
        return `${this.marca} ${this.modelo} acelerou. Vruum...`;
    },
};

console.log(carro.marca);
console.log(carro.ano);
console.log(carro.modelo);

console.log(carro.acelerar());
 
console.log("");

const pessoa ={ 
    nome: "Lucas",
    idade: 20,
    altura: 1.72,
    registro: "9999999999",
    empregado: true,
    apresentar: function(){

        let infoempregado = (this.empregado === true) ? "Sim" : "Não";

      
        return `Meu nome é: ${this.nome}
         minha idade é:${this.idade}
          Minha altura é:${this.altura} 
          E meu número de registro é:${this.registro}
          Eu trabalho?: ${infoempregado}
          `;

    },

};

console.log(pessoa.apresentar());

console.log("");

