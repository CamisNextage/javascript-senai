let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado:"));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("O triângulo é Equilátero (todos os lados são iguais).");
} 
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("O triângulo é Isósceles (dois lados são iguais).");
} 
else {
    console.log("O triângulo é Escaleno (todos os lados são diferentes).");
}