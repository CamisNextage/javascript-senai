function filtrarEstatisticas(vetor) {
    let contador = 0;
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 0 && vetor[i] > 50) {
            contador++;
        }
    }
    return contador;
}
let meusNumeros = [];

for (let i = 0; i < 7; i++) {
    meusNumeros.push(parseInt(prompt(`Digite o número para a posição ${i}:`)));
}
let totalEncontrado = filtrarEstatisticas(meusNumeros);

console.log("Vetor analisado:", meusNumeros);
console.log(`Quantidade de números positivos e maiores que 50: ${totalEncontrado}`);