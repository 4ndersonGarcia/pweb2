let nome = "Anderson garcia";

let nomes = nome.split(" ");

let fLeter = nomes.reduce((inicial, n) => inicial + n[0], '' );


document.getElementById("demo").innerHTML = fLeter;