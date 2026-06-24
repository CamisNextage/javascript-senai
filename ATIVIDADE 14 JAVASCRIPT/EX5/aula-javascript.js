let codigos = [1020, 2030, 3040, 4050, 5060, 6070, 7080, 8090, 9010, 1112];

let codigoProcurado = 6070; 

let indiceEncontrado = -1;

for (let i = 0; i < codigos.length; i++) {
    if (codigos[i] === codigoProcurado) {
        indiceEncontrado = i;
        break; 
    }
}

console.log("Buscando pelo código:", codigoProcurado);
if (indiceEncontrado !== -1) {
    console.log("Código encontrado no índice:", indiceEncontrado);
} else {
    console.log("Código não cadastrado");
}