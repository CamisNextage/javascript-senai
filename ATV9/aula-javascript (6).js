const SENHA_CORRETA = 'segredo123';
let tentativas = 0;
let acertou = false;

while (tentativas < 3 && !acertou) {
    let senhaDigitada = prompt(`Tentativa ${tentativas + 1} de 3. Digite a senha:`);
    
    if (senhaDigitada === SENHA_CORRETA) {
        acertou = true;
    } else {
        alert("Senha incorreta!");
        tentativas++;
    }
}
if (acertou) {
    console.log("Acesso Permitido");
} else {
    console.log("Conta Bloqueada");
}