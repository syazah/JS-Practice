//there are various ways to select an element in JS
document.getElementById();
document.getElementsByClassName();
document.querySelector(); // can access id or class or whole element provided with what we write inside brackets
document.querySelectorAll() // gives an array of elements, you can apply for each loop here.

//let us take
const h1El = document.querySelectorAll('h1'); //always use single quote
//if you want to change something you need to :
h1El[0].style.color = 'green';
