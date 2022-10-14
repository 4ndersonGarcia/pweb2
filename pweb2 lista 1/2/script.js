let x = parseInt(prompt("Digite um número inteiro:"));
let y = 1;
let soma = 0;

while(y <= x) {
	soma = soma + y;
	y = y + 1;
}
document.write(soma);