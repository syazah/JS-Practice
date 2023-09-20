//objects are made by two ways literals and constructors.
//constructor method :
Object.create

//LITERALS :- singleton is not made
const sym = Symbol("Key1");
const jsUser = {
    //key : value 
    //key is stored as a string 
    name: "Azaan",
    age:20,

    //symbol as an object
    [sym]: "myKey1",

    email: "az448.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "tuesday"]
}

//TWO WAYS TO ACCESS:
console.log(jsUser.email);
console.log(jsUser["email"]);

//make changes
jsUser.email = "az884@.com"

//To freeze any changes i.e to neglect any changes happening we just use Object.freeze()
// Object.freeze(jsUser);
jsUser.email = "az448@.com"; //this will not occur

//creating a function for an object
jsUser.greeting = function(){
    // to access something from the object itself
    console.log(`Hello ${this.name}`);
}

//first unfreeze to use this ::
console.log(jsUser.greeting());


