function calcularMediaPonderada(n1, n2, p1, p2) {
    let media = ((n1 * p1) + (n2 * p2)) / (p1 + p2);
    return media;
}

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let peso1 = parseFloat(prompt("Digite o peso da primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let peso2 = parseFloat(prompt("Digite o peso da segunda nota:"));

let resultadoFinal = calcularMediaPonderada(nota1, nota2, peso1, peso2);

console.log(`A média ponderada calculada é: ${resultadoFinal.toFixed(2)}`);