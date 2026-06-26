const matrizA = Array(2).fill(0).map(() => Array(3).fill(0));
const matrizB = Array(3).fill(0).map(() => Array(2).fill(0));

alert("--- Preenchendo a Matriz A (2x3) ---");

for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 3; c++) {
        let valor = prompt(`Matriz A [${l}][${c}]:`);
        matrizA[l][c] = parseInt(valor) || 0;
    }
}

for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 3; c++) {
        matrizB[c][l] = matrizA[l][c];
    }
}

console.log("--- Matriz Resultante B (Transposta de A - 3x2) ---");
for (let l = 0; l < 3; l++) {
    let linhaTexto = "";
    for (let c = 0; c < 2; c++) {
        linhaTexto += matrizB[l][c] + "\t";
    }
    console.log(linhaTexto);
}