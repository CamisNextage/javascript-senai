let numero = parseInt(prompt("Digite um número inteiro positivo:"));
const numeroOriginal = numero;

let contador = 0;

while (numero > 0) {
    numero = Math.floor(numero / 10); 
    contador++;
} 
console.log(`O número ${numeroOriginal} possui ${contador} dígitos.`);