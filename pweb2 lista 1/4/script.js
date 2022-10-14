//document.write("teste")
let f = parseInt(prompt("Informe um inteiro não ngativo:"));
let fatorial;
let i;

if(f == 0) {
	
		fatorial = 1;
	
}else{
	
	fatorial = f;
	i = f - 1;
	while(i > 0){

		fatorial = fatorial * i
		i-= 1;

	};
	
}

document.write(fatorial);