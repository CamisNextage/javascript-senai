let matrizA = [
    [1, 2, 3],
    [4, 5, 6]
];

let matrizB = [
    [10, 20, 30],
    [40, 50, 60]
];

let matrizC = [
    [0, 0, 0],
    [0, 0, 0]
];

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        matrizC[i][j] = matrizA[i][j] + matrizB[i][j];
    }
}

console.log("Resultado da Matriz C (Soma de A + B):");
for (let i = 0; i < 2; i++) {
    console.log(matrizC[i].join("\t"));
}