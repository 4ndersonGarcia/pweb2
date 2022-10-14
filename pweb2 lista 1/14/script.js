let anos = parseInt(prompt("Anos fumando:"));
let cig_Dia = parseInt(prompt("Cigarros/dia:"));
let ca20 = parseFloat(prompt("Valor da carteira:"))


document.write("Dinheiro gasto: R$" + ((ca20 /20) * (cig_Dia * (anos * 365))));
