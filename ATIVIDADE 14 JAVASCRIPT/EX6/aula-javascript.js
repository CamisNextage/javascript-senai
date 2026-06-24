let valoresDigitados = [5, 8, 2, 1, 9, 4, 7, 3, 6];

let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let contador = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = valoresDigitados[contador];
        contador++;
    }
}

console.log("--- Relatório Visual da Matriz 3x3 ---");
for (let i = 0; i < 3; i++) {
    let linhaTexto = "";
    for (let j = 0; j < 3; j++) {
        linhaTexto += matriz[i][j] + "\t";
    }
    console.log(linhaTexto);
}