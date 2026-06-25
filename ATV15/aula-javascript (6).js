let notas = [];
let soma = 0;
for (let i = 0; i < 8; i++) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
    notas.push(nota);
    soma += nota;
}

let mediaTurma = soma / 8;
console.log(`Média da Turma: ${mediaTurma.toFixed(2)}`);
console.log("--- Alunos Abaixo da Média ---");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < mediaTurma) {
        console.log(`Índice [${i}] -> Nota: ${notas[i]}`);
    }
}