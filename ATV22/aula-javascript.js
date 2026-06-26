const matriz = Array(3).fill(0).map(() => Array(3).fill(0));

alert("--- Preenchimento da Matriz 3x3 (Números Reais) ---");

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        let valor = prompt(`Elemento [${l}][${c}]:`);
        matriz[l][c] = parseFloat(valor) || 0.0;
    }
}

const fator = parseFloat(prompt("Digite o fator multiplicador:")) || 1;

console.log("--- Matriz Original Alterada e Formatada ---");
for (let l = 0; l < 3; l++) {
    let linhaTexto = "";
    for (let c = 0; c < 3; c++) {
        matriz[l][c] *= fator;
        linhaTexto += matriz[l][c].toFixed(2) + "\t";
    }
    console.log(linhaTexto);
}