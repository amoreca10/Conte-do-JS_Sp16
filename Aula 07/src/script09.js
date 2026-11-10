// Exercício 9: Calcule a área de um círculo de acordo com os dados informados pelo usuário.

alert("Área de círculo");

let raioCirculo = parseFloat(prompt("Informe o valor do raio da circunferêcia: "));

let pi = 3.14;

let areaCirculo = pi * (Math.pow(raioCirculo, 2));

alert("A área total do círculo é de: " + areaCirculo + "cm");