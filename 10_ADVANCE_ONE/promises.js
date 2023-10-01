const promise = new Promise(function(resolve /*  Promise will be delivered */, reject /* Promise will be rejected*/){
    // DO THE ASYNCH TASK :- DB, CRYPTOGRAPHY, NETWORK
    setTimeout(function(){
        console.log('Task Completed');
        resolve();
    }, 1000)
});

promise.then(function(){
    console.log('Promise Consumed');
}) // connected with resolve, it gives a callback

//--------------ANOTHER METHOD-------------------------------------------------
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Task Completed Again');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Promise Consumed Again');
})

//--------------MORE ABOUT RESOLVE AND THEN-------------------------------------------------
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user:"Azaan", email:"thesyazah@gmail.com"}); // the parameters inside resolve is accessed inside the then.
    },2000)
}).then(function(user){
    console.log(user);
})

//-------------HANDLING ERRORS------------------------------------------------------------------------
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({username:"Azaan", userId: 11234});
        }else{
            reject("ERROR: Something Went Wrong");
        }
    }, 1000);
})

//HERE CHAINING IS DONE TO GET THE RETURNING VALUE OF THE .then
promiseThree.then((user)=>{
    console.log(user);
    return user.username;
})/*Used for resolve*/.then((username) =>{
    console.log(username);
})/*Used for reject*/.catch((error)=>{
    console.log(error);
})/*Used for final result*/.finally(()=> console.log("Either Rejected or Resolved"));

//-------------ASYNC AWAIT-----------------------------------------------------------------------
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({username:"Ahmad", userId: 11234});
        }else{
            reject("ERROR: JS Went Wrong");
        }
    }, 1000);
});

/*async function consumePromiseFive(){
    const resolving = await promiseFive;
    console.log(resolving);
} used for not handling error*/

async function consumePromiseFive(){
    try{
        const resolving = await promiseFive;
        console.log(resolving);
    }catch(error){
        console.log(error);
    }
} // for handling errors

consumePromiseFive();

