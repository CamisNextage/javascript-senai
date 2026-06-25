let inventario = [];
for (let i = 0; i < 8; i++) {
    inventario.push(parseInt(prompt(`Cadastre o código do produto na posição ${i}:`)));
}

let codigoRemover = parseInt(prompt("Qual código de produto deseja remover?"));
let encontrou = false;
for (let i = 0; i < inventario.length; i++) {
    if (inventario[i] === codigoRemover) {
        inventario[i] = 0;
        encontrou = true;
    }
}
if (encontrou) {
    console.log("Sucesso! Produto removido do sistema.");
} else {
    console.log("Erro: O produto não existe.");
}

console.log("Inventário atualizado:", inventario);