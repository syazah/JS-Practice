//setTimeout(Handler, time); Here handler is an un-named function or only the reference of the named function.
setTimeout(function(){
    console.log("Azaan Here");
}, 1000)

const sayHi =()=>{
    console.log("HIHI");
}

setTimeout(sayHi, 2000);

//------------------------clearTimeout(reference to the timeout);-----------------------------------------
const sayingHiAgain = setTimeout(sayHi, 2000);
clearTimeout(sayingHiAgain);
