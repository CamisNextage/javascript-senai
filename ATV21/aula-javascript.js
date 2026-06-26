const matriz = Array(4).fill(0).map(() => Array(4).fill(0));

alert("--- Preenchimento da Matriz 4x4 ---");

for (let l = 0; l < 4; l++) {
    for (let c = 0; c < 4; c++) {
        let valor = prompt(`Elemento [${l}][${c}]:`);
        matriz[l][c] = parseInt(valor) || 0;
    }
}

let somaColuna1 = 0;
for (let l = 0; l < 4; l++) {
    somaColuna1 += matriz[l][1];
}

console.log("--- Auditoria de Coluna ---");
console.log(`A soma dos elementos da segunda coluna (índice 1) é: ${somaColuna1}`);