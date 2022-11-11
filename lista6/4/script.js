arr1 = [6,3,0];

arr2 = arr1.reduce((soma, n, i, a) => i ==(a.length -1) ? (soma+n)/a.length : soma+n, 0)

document.getElementById("demo").innerHTML = arr2;