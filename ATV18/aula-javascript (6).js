let vetorA = [];
let vetorB = [];
let vetorC = []; 
for (let i = 0; i < 5; i++) {
    vetorA.push(parseInt(prompt(`Vetor A - Digite o elemento ${i}:`)));
}
for (let i = 0; i < 5; i++) {
    vetorB.push(parseInt(prompt(`Vetor B - Digite o elemento ${i}:`)));
}
for (let i = 0; i < 5; i++) {
    vetorC[2 * i] = vetorA[i];      
    vetorC[2 * i + 1] = vetorB[i];  
}

console.log("Vetor A:", vetorA);
console.log("Vetor B:", vetorB);
console.log("Vetor C (Intercalado):", vetorC);