//----------------------------------USING ASYNC AWAIT-------------------------------------------------------

async function fetchUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const jresponse = await response.json(); //this also takes time so we have to put await
        console.log(jresponse[0].phone);
    } catch (error) {
        console.log(`ERROR DETECTED: ${error} `);
    }
}
fetchUsers();

//----------------------------------USING .then .catch-------------------------------------------------------
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data[1].company);
}).catch((error)=>{
    console.log(`ERROR DETECTED`);
}).finally(()=> console.log(`DONE`));

/* NOTE :- A fetch() promise only rejects when a network error is encountered which is usually when there is a permission issue. A fetch promise does not reject on http errors(error 404, 406...) instead a then handler checks the response property */

// All the code inside fetch gets into a callback queue (which is a priority queue). Fetch is given more priority 

/* When a fetch request is done two things occur
    SPACE RESERVATION IN MEMORY (1)                                     HANDLING WEB/NODE API (2)
    onFulfilled[] & onRejection[]                                       NetworkRequest 
*/