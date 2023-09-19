//NORMAL NUMBERS
const num1 = 100
// console.log(num1)

//PROTOTYPE NUMBERS
const num2 = new Number(100);
// console.log(num2);
//TO STRING
// console.log(num2.toString().length);
// DECIMAL POINT VALUE
// console.log(num2.toFixed(2));
//PRECISION VALUE
let num3 = 100.456;
// console.log(num2.toPrecision(3));

//++++++++++++++MATHS++++++++++++++++++++++
console.log(Math) // this tells us that Math itself is an object

//To get random values from 0 to 1
console.log(Math.random())
//To get values from 1 to 10
console.log((Math.random()*10) + 1);
//To get Integral Values
console.log(Math.floor((Math.random()*10)+1));
//TO get a value between a range
let max = 20;
let min = 10;
console.log(Math.floor(Math.random()*(max-min+1)) + min);







