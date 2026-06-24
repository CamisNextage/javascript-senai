let matrizIdentidade = [];
for (let i = 0; i < 4; i++) {
    matrizIdentidade[i] = []; 
    for (let j = 0; j < 4; j++) {
        if (i === j) {
            matrizIdentidade[i][j] = 1; 
        } else {
            matrizIdentidade[i][j] = 0; 
        }
    }
}

console.log("Matriz Identidade 4x4 Gerada:");
for (let i = 0; i < 4; i++) {
    console.log(matrizIdentidade[i].join("   "));
}