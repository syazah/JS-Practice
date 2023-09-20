//singleton object
const tinderUser = new Object()
tinderUser.id = 123044;
tinderUser.name = "Azaan";
tinderUser.isLogged = false;
console.log(tinderUser);

//OBJECT NESTING
const regularUsr = {
    email: "someone@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Azaan",
            lastName:"Ahmad"
        }
    }
}

console.log(regularUsr.fullName.userFullName);

//combining two objects:
const obj1 = {
    1:"A",
    2:"B"
}
const obj2 = {
    3:"D",
    4:"E"
}

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

//spread operator
const obj4 = {...obj1, ...obj2};
console.log(obj4);

//array of objects
const users = [
    {
        name: "azaan",
        age: 20
    },
    {
        name: "mannu",
        age:40
    }
]

console.log(users[1].name);

//GET KEYS AND VALUES 
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//these keys and value are presented in the form of arrays. to put these key values into arrays 
console.log(Object.entries(tinderUser));