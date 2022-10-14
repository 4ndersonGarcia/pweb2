let n = parseInt(prompt("Digite um numero:"));

let primo = true;

let i;

for (i = 2; i < n; i++){

    if((n%i) == 0){
        primo = false;
    }


}

document.write("Primo:" + primo);
