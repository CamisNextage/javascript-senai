let dinheiro= Number(prompt("Digite seu saldo atual :"));
let sacar= Number(prompt("Digite o valor que deseja sacar :"));
if(sacar <= dinheiro){
    console.log("Saldo disponivel para saque !");
}else
    console.log("Saldo insuficiete!");