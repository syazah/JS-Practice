//OBJECT LITERALS
const user ={
    username: "Azaan",
    loginCount: 112,
    signedIN: true,

    getUserDetails: function(){
        console.log(this);
    }
}
user.getUserDetails();

//CONSTRUCTOR :- Helps us to create multiple instances through one object literal
