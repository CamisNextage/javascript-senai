let vetor = [];
for (let i = 0; i < 10; i++) {
    vetor.push(parseInt(prompt(`Digite o número para a posição ${i}:`)));
}

console.log("Vetor Original:", [...vetor]);
for (let i = 0; i < Math.floor(vetor.length / 2); i++) {
    let indiceOposto = vetor.length - 1 - i;
    let temporario = vetor[i];
    vetor[i] = vetor[indiceOposto];
    vetor[indiceOposto] = temporario;
}

console.log("Vetor Invertido:", vetor);