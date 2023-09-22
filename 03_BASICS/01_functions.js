//enclosing a code into a package and using its copies
function sayMyName(){
    console.log("Azaan");
} 

sayMyName    ()
//|          |    
//reference execution

function addTwoNum(num1,num2){
    console.log(num1+num2);
}
addTwoNum(2,3);

function returnUserName(username){
    return `${username} just logged in`;
}

console.log(returnUserName("Azaan"));
//when no parameter is passed the result is undefined, not null.

//we can also pass a default value and if we call a function without a parameter the default value is printed else the parameter will override the value

function azaanIs(adjective = "Smart"){
    return `Azaan is ${adjective}`;
}
console.log(azaanIs());