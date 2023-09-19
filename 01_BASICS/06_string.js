//string interpolation
/* Backticks - ` ` are used for string interpolation. We can directly insert a variable containing any value by using ${} inside the string written in backticks */

const name = "Azaan";
let age = 20;
console.log(`Hello My name is ${name} and I am ${age} `);

//ANOTHER WAY TO DEFINE THE STRING
const gameName = new String('New World');
/* This provides each character of a string with key value pairs thus it also provides many methods in prototype */
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);

//SOME EXTRA FUNCTIONS
let newGameName = gameName.substr(0,5);
console.log(newGameName);   

//TRIM TO REMOVE SPACE
let newString = "     Hello      ";
console.log(newString.trim());
//REPLACE SOME CHARACTERS OF A STRING WITH ANOTHER VALUE 
console.log(newString.replace('ell', 'lle'));
//SPLIT ON THE BASIS OF CHARACTERS
console.log(newString.split('l'));


