n = 4;

arr = new Array(n);

arr2 = arr.fill(0);
arr3 = arr2.map((el, i) => i+1);
arr4 = arr3.reduce((soma,n) => soma*n);


document.getElementById("demo").innerHTML = arr4;