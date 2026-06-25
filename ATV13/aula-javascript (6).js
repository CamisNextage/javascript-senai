const TAXA_DOLAR = 5.20; 
const TAXA_EURO = 5.60;  

let opcao;

do {
    opcao = parseInt(prompt("Menu de Conversão:\n1 - Converter Dólar\n2 - Converter Euro\n3 - Sair\n\nEscolha uma opção:"));

    if (opcao === 1) {
        let reais = parseFloat(prompt("Digite o valor em Reais (R$):"));
        let dolares = reais / TAXA_DOLAR;
        alert(`R$ ${reais.toFixed(2)} equivale a US$ ${dolares.toFixed(2)}`);
        
    } else if (opcao === 2) {
        let reais = parseFloat(prompt("Digite o valor em Reais (R$):"));
        let euros = reais / TAXA_EURO;
        alert(`R$ ${reais.toFixed(2)} equivale a € ${euros.toFixed(2)}`);
        
    } else if (opcao === 3) {
        alert("Saindo do programa... Até logo!");
        
    } else {
        alert("Opção inválida! Tente novamente.");
    }

} while (opcao !== 3); 