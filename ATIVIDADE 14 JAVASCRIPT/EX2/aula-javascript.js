let temperaturas = [22.5, 25.4, 28.1, 31.2, 29.8, 26.0, 24.3, 30.5, 21.0, 27.4];
let maiorTemp = temperaturas[0];
let indiceMaior = 0;

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] > maiorTemp) {
        maiorTemp = temperaturas[i];
        indiceMaior = i;
    }
}

console.log("Temperaturas registradas:", temperaturas);
console.log("Maior temperatura cadastrada:", maiorTemp + "°C");
console.log("Encontrada no índice (posição):", indiceMaior);