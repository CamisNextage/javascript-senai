function classificarIMC(peso, altura) {
    let imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidade';
    }
}

let pesoUsuario = parseFloat(prompt("Digite seu peso (ex: 70.5):"));
let alturaUsuario = parseFloat(prompt("Digite sua altura (ex: 1.75):"));

let resultadoClassificacao = classificarIMC(pesoUsuario, alturaUsuario);

console.log(`Sua classificação de IMC é: ${resultadoClassificacao}`);