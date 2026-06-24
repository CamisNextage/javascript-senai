let precoCusto = Number(prompt("Digite o custo de preço do produto :"));
let PorcentagemMargem =Number(prompt("Digite a margem do lucro desejada (EX: 25) :"));
let ValorDoLucro =precoCusto * (PorcentagemMargem / 100);
let PrecoVenda= precoCusto + ValorDoLucro;
alert( "Valor do lucro: R$ " + ValorDoLucro.toFixed(2));
alert("Preço final da venda é de: R$" + PrecoVenda.toFixed(2));