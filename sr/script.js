// Estruturas Condicionais

// If
const hora = new Date().getHours();
let mensagem;
if (hora > 18) {
  mensagem = "Boa noite!";
}
console.log(mensagem);
console.log("");
// Condição Aninhada
let idade = 18;
let pais = "Brasil";
let resultado = "Você não pode dirigir";
// if (pais === "Brasil") {
//   if (idade >= 18) {
//     resultado = "Você pode dirigir.";
//   }
// }
if (pais === "Brasil" && idade >= 18) {
  resultado = "Você pode dirigir.";
}
console.log(resultado);
console.log("");
// If Else
let mensagem2;
if (hora < 18) {
  mensagem2 = "Bom dia!";
} else {
  mensagem2 = "Boa noite!";
}
console.log(mensagem2);
console.log("");
// Else If
let mensagem3;
if (hora < 12) {
  mensagem3 = "Bom dia!";
} else if (hora < 18 && hora >= 12) {
  mensagem3 = "Boa Tarde!";
} else {
  mensagem3 = "Boa Noite!";
}
console.log(mensagem3);
console.log("");
// If Ternário
let idade2 = 10;
let retorno = (idade2 >= 18) ? "Maior de idade." : "Menor de idade.";
console.log(retorno);
console.log("");
// Switch
alert("Informe um dia da semana.");
const dia = parseInt(prompt("Escolha um dia da semana: \n\n 0 - Domingo \n 1 - Segunda-Feira \n 2 - Terça-Feira \n 3 - Quarta-Feira \n 4 - Quinta-Feira \n 5 - Sexta-Feira \n 6 - Sábado"));
let diaSemana;
switch (dia) {
  case 0:
    diaSemana = "Domingo";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;
    
  case 1:
    diaSemana = "Segunda-Feira";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;
    
  case 2:
    diaSemana = "Terça-Feira";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;

  case 3:
    diaSemana = "Quarta-Feira";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;

  case 4:
    diaSemana = "Quinta-Feira";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;

  case 5:
    diaSemana = "Sexta-Feira";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;

  case 6:
    diaSemana = "Sábado";
    alert("O dia da semana selecionado foi: " + diaSemana);
    break;

  default:
    let aviso = "Valor incorreto. Tente novamente.";
    alert(aviso);
    location.reload();
    break;
}