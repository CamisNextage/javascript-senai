const notas = Array(4).fill(0).map(() => Array(3).fill(0));
const medias = Array(4).fill(0);

alert("--- Cadastro de Notas (4 Equipes x 3 Trimestres) ---");

for (let i = 0; i < 4; i++) {
    let somaNotas = 0;
    for (let j = 0; j < 3; j++) {
        let valor = prompt(`Equipe ${i + 1} - Nota do ${j + 1}º Trimestre:`);
        notas[i][j] = parseFloat(valor) || 0.0;
        somaNotas += notas[i][j];
    }
    medias[i] = somaNotas / 3;
}

console.log("=================================");
console.log("  RELATÓRIO DE DESEMPENHO");
console.log("=================================");
for (let i = 0; i < 4; i++) {
    console.log(`Equipe ${i + 1} -> Média Final: ${medias[i].toFixed(2)}`);
}