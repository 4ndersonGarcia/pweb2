let x = parseInt(prompt("Numero inteiro:x"));
let y = parseInt(prompt("Numero inteiro não negativo:<sup>n</sup>"));
let poten = x;

if((y != 0) & (y > 0)){
	
	for(let i = 1; i < y; i++){
		
		poten = poten * x;
		
		
	}
}else if(y == 0){
	poten = 1;
}
	
		

	
	//poten = x**y;
	


document.write(poten);