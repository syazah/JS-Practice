//this keyword is used to refer to the current context inside the scope
const user = {
    username: "Azaan",
    price: 999,
    message: function(){
        //It only works in objects and not in normal functions
        console.log(`${this.username}, welcome`);
        //here we used this to access username of this object in the current scope
    }
}

user.message();
user.username = "Ahmad"
user.message();

//scope of environment is empty, as in node environment the context is empty object, in chrome/browser the context is window, which is the global object.
console.log(this);

function chai(){
    console.log(this);
}
chai();


//+++++++++++++++++++++++++++++++++++++++++++

const add = (num1,num2) =>{
    return num1+num2;
}
console.log(add(1,2));

//Implicit return
const addTwo = (num1,num2) => (num1+num2);