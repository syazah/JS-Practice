/* ON THE BASIS OF HOW DATA IS STORED AND ACCESSED BY THE MEMORY 
IT CAN BE CLASSIFIED INTO TWO TYPES */

// 1)PRIMITIVE                              2)REFERENCE TYPE
/*   -String                                  - ARRAY
     -Number                                  - OBJECTS
     -Boolean                                 - FUNCTIONS
     -null
     -undefined
     -Symbol
     -BigInt*/

//JS IS DYNAMIC OR STATIC
/*Since in js the datatype of a declared variable is acknowledged by JS by looking up the data
JS does not requires users to tell about the datatype thus JS is dynamically typed language 
*/

//Symbols
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

//BigInt - n
const bigNumber = 738332244445421n;

//Arrays
const heros = ["Azaan", "SuperMan", "SpiderMan"];

//Objects
{
    name: "Azaan";
    age: 20

}
const myObj = {}

//Function
const tempFunction = function(){
    console.log("This is a function");
}

//null ka typeof object aata hai 
//Saare non primitive datatypes ka typeof objects hi aayega, functions ka function object hoga

