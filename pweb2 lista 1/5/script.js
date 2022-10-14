let n1 = parseInt(prompt("Digite um numero inteiro:"));
let n2 = parseInt(prompt("Digite um segundo numero inteiro"));
let resto;



do{

    resto = n1%n2;
    if(resto != 0){
        n1 = n2;
        n2 = resto;
    }



}while(resto != 0);

document.write(n2);