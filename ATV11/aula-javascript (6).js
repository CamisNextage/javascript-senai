let inicio = parseInt(prompt("Digite o número de início do intervalo:"));
let fim = parseInt(prompt("Digite o número de fim do intervalo:"));

let somaAcumulada = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        somaAcumulada += i; 
    }
}

console.log(`A soma dos múltiplos de 3 ou 5 no intervalo de ${inicio} a ${fim} é: ${somaAcumulada}`);