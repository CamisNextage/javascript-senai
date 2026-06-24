let desempenho = [
    [78, 85, 92, 88], 
    [95, 79, 81, 90], 
    [70, 88, 86, 94]  
];


for (let i = 0; i < desempenho.length; i++) {
    let maiorPontuacao = desempenho[i][0]; 
    
    for (let j = 1; j < desempenho[i].length; j++) {
        if (desempenho[i][j] > maiorPontuacao) {
            maiorPontuacao = desempenho[i][j];
        }
    }
    
    console.log(`[ALERTA] Equipe ${i + 1} - Maior pontuação registrada: ${maiorPontuacao}`);
}