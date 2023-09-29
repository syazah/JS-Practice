const xhr = new XMLHttpRequest();
const requestUrl = 'https://api.api-ninjas.com/v1/randomuser';
xhr.open('GET', requestUrl); //to send request;

console.log(xhr.readyState); //to get the current state
xhr.onreadystatechange = function(){ // to continuously track the request
    console.log(xhr.readyState); 
    if(xhr.readyState == 4){
        const data = JSON.parse(this.responseText);
        console.log(data.followers);
    }
}

xhr.send();