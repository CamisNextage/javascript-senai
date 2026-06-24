let notas = [7.5, 4.0, 8.5, 6.0, 9.0];

let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
let mediaGeral = somaNotas / notas.length;

let alunosAcimaDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mediaGeral) {
        alunosAcimaDaMedia++;
    }
}

console.log("Notas dos alunos:", notas);
console.log("Média geral da turma:", mediaGeral.toFixed(2));
console.log("Quantidade de alunos acima da média:", alunosAcimaDaMedia);