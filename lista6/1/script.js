let arr1 = prompt('digite separado por ,( x,y,z,...)')
arr1 = arr1.split(",");

let arr2 = arr1.map((a) => Math.pow(a,2));

document.getElementById("demo").innerHTML = arr2;