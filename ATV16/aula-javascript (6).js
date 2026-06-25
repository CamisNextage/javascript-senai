let vetorInicial = [];
let pares = [];
let impares = [];
for (let i = 0; i < 10; i++) {
    vetorInicial.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
}
for (let i = 0; i < vetorInicial.length; i++) {
    if (vetorInicial[i] % 2 === 0) {
        pares.push(vetorInicial[i]);
    } else {
        impares.push(vetorInicial[i]);
    }
}
console.log("Vetor Inicial:", vetorInicial);
console.log("Vetor de Pares:", pares);
console.log("Vetor de Ímpares:", impares);