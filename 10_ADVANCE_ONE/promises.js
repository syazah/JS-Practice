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

//-------------CHAINING------------------------------------------------------------------------
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve()
    }, 1000)
})
