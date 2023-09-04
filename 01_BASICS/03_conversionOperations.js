let score = "33";
//here we have declared score in string 
console.log(typeof score);

//to convert into number we do the following
let num1 = Number(score);

console.log(typeof num1);

/*Now the problem is that when we try to put letters in the 
variable and convert into numbers it is converted but shows NAN*/

let scoreTwo = "33abc";
let num2 = Number(scoreTwo);
console.log(typeof num2);
console.log(num2);
