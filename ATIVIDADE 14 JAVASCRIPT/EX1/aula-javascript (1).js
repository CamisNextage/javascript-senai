let entradasDoUsuario = [10, 5, 20, 0, 8, 12, 15, 3]; 
let estoque = [];
for (let produtoAtual = 0; produtoAtual < 8; produtoAtual++) {
    let quantidade = entradasDoUsuario[produtoAtual];
    estoque.push(quantidade || 0);
}

let totalEstoque = 0;
for (let i = 0; i < estoque.length; i++) {
    totalEstoque += estoque[i];
}

console.log("Estoque completo:", estoque);
console.log("Quantidade total de caixas no estoque:", totalEstoque);