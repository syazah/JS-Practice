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

/*************************************OPERATIONS*************************************************** */

//These are some complex Operations:- 
//If string is written first then everything is converted into strings.
console.log("1" + 2 + 2);
//Else first we do normal operations  
console.log(1+2+"2");

//PREFIC AND POSTFIX
let a = 101;
++a; //first increases and does operations
a++; //first operation and then increases



