// Funções

function exibirCArro(){
    let novoCarro = "Porshe";

    console.log(novoCarro);
}

exibirCArro();

//Função com 4 parâmetros

function saudacao(Nome, sobrenome, idade, altura){
  
    let saudacaoMensagem = `Olá, eu me chamo ${Nome}, ${sobrenome}, tenho ${idade} anos de idade e ${altura}m de altura`;
   
    return saudacaoMensagem;
}

console.log(saudacao("Lucas","Amorim", "20","1.72"))

console.log("");

//Função com 1 parâmetros

function paraCelsius(grausFahrenheit){

    let grausCelsius =  (5 / 9) * (grausFahrenheit - 32 );
    
    let mensagemRetorno = `${grausFahrenheit}° Fahrenheit em Celsius é igual a: ${grausCelsius}°C`;

    return mensagemRetorno;

} 

let grausFahrenheit = 212

//let grausFahrenheit = parseFloat(prompt('Informe um valor de temperatura em fahrenheit para converter em Celsiu'));

const elementoh3 = document.querySelector(".ex1"); 
 
elementoh3.innerHTML = paraCelsius(grausFahrenheit);

console.log("");

// Valore padrão para parâmetros
function soma(a = 1, b= 2){
    return a + b;
}

console.log(soma(10,4));
console.log(soma(4));
console.log(soma());

console.log("");

// Utilizando valor retornado de função em um expressão matemática
function mult(a,b){
    return a * b;
} 

 let result = mult(5,10) / 2;

console.log(result);

console.log("");

// Utilizando dois retornos em uma função 
function sub(a,b){
    return"Somente a dor coletiva gera a união.";
    
   
    return a - b;
}

let result1 = sub (10, 5);
console.log(result1);

console.log("");

// Utilizando return para finalizar execução utilizando condição lógica
function id(idade){
    if (idade <18){
    return "Você é menor de idade";
}

    return "Você é maior de idade";
}


let result2 = id(16);

console.log(result2);