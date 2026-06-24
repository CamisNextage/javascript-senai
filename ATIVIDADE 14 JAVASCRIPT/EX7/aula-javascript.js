let matriz = [
    [10, 23, 45],
    [12, 50, 89],
    [71, 34, 99]
];

let valoresDiagonal = [];
let somaDiagonal = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            valoresDiagonal.push(matriz[i][j]);
            somaDiagonal += matriz[i][j];
        }
    }
}

console.log("Valores encontrados na Diagonal Principal:", valoresDiagonal);
console.log("Somatório final da diagonal:", somaDiagonal);