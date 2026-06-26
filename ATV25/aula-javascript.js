function consolidarInventario(produtos, estoque) {
    console.log("=========================================");
    console.log("      INVENTÁRIO CONSOLIDADO");
    console.log("=========================================");
    console.log(`${'Produto'.padEnd(15)} | ${'Filial 1'.padEnd(8)} | ${'Filial 2'.padEnd(8)} | Total Estocado`);
    console.log("-".repeat(55));
    
    for (let i = 0; i < 4; i++) {
        let totalProduto = estoque[i][0] + estoque[i][1];
        let p = produtos[i].padEnd(15);
        let f1 = estoque[i][0].toString().padEnd(8);
        let f2 = estoque[i][1].toString().padEnd(8);
        console.log(`${p} | ${f1} | ${f2} | ${totalProduto}`);
    }
}

const nomesProdutos = ["Teclado Mec.", "Mouse Gamer", "Monitor 24'", "Headset USB"];
const estoqueFiliais = Array(4).fill(0).map(() => Array(2).fill(0));

alert("--- Entrada de Estoque por Filial ---");

for (let i = 0; i < 4; i++) {
    let f1 = prompt(`Produto: ${nomesProdutos[i]} \nQuantidade na Filial 1:`);
    estoqueFiliais[i][0] = parseInt(f1) || 0;
    
    let f2 = prompt(`Produto: ${nomesProdutos[i]} \nQuantidade na Filial 2:`);
    estoqueFiliais[i][1] = parseInt(f2) || 0;
}

consolidarInventario(nomesProdutos, estoqueFiliais);