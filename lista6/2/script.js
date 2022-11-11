arr1 = [-2,1,3,4,-3];

arr2 = arr1.reduce((soma,n) => n > 0 ? soma+= n : soma, 0);

document.getElementById("demo").innerHTML = arr2;