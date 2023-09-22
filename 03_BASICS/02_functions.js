//to pass multiple values in a function
function multipleNum(...num1){
    return num1;
}
console.log(multipleNum(1,2,3,4,5));
//here values returned are in the form of array

//OBJECTS AND FUNCTIONS
const user = {
    name: "Azaan",
    id: 114444
}

function printObject(anyObject){
    return `Name = ${anyObject.name} and id = ${anyObject.id}`;
}

console.log(printObject(user));