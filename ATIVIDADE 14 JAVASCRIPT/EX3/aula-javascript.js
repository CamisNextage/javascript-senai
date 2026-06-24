let alunos = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"];

console.log("Listagem completa em ordem reversa:");

for (let i = alunos.length - 1; i >= 0; i--) {
    console.log(`Posição ${i}: ${alunos[i]}`);
}