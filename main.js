
// assignment : print even and odd number from list of 20 numbers

// even from array

let arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


for (let number1 of arrayList)
{
    if (number1 % 2 == 0){
        console.log (number1); // 2,4,6,8,10,12,14,16,18,20
    }
  
}

// odd from array

for (let number2 of arrayList)
{
    if(number2 % 2 != 0){
        console.log(number2); // 1,3,5,7,9,11,13,15,17,19
    }
}


