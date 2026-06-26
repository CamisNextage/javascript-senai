const matriz = Array(3).fill(0).map(() => Array(3).fill(0));

alert("--- Digite os valores para a Matriz 3x3 ---");

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        let valor = prompt(`Digite o valor para a posição [${l}][${c}]:`);
        matriz[l][c] = parseInt(valor) || 0;
    }
}

let maiorValor = matriz[0][0];
let linhaMaior = 0;
let colunaMaior = 0;

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (matriz[l][c] > maiorValor) {
            maiorValor = matriz[l][c];
            linhaMaior = l;
            colunaMaior = c;
        }
    }
}

console.log("--- Resultado da Busca ---");
console.log(`O maior valor encontrado foi: ${maiorValor}`);
console.log(`Coordenadas exatas: Linha ${linhaMaior}, Coluna ${colunaMaior}`);