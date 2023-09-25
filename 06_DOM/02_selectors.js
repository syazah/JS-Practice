//there are various ways to select an element in JS
document.getElementById();
document.getElementsByClassName();
document.querySelector(); // can access id or class or whole element provided with what we write inside brackets
document.querySelectorAll() // gives a collection of elements, it works as an array but is not an array, you can apply for each loop here, but map and filter can't be applied. We can say that it returns a nodelist

//let us take
const h1El = document.querySelectorAll('h1'); //always use single quote
//if you want to change something you need to :
h1El[0].style.color = 'green';
//we can also apply forEach loop
h1El.forEach((item) = {})


//IF WE SELECT MULTIPLE ELEMENTS OF SAME CLASS, It returns HTMLCollection and not Nodelist. To convert nodelist or htmlcollection to array we simply do the following
const listItem = document.getElementsByClassName('.list');
Array.from(listItem);


