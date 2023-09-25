// some various manipulations on the dom object are given as follows.
document.getElementById('title'); // access element with id title
document.getElementById('title').id; //access the id of the element 
document.getElementById('title').className; //access the className of the element having id title
document.getElementById('title').getAttribute();//gets all the attributes of the id title

// we can take a variable and give it the value of element 
const title = document.getElementById('title');
title.style.backgroundColor = 'green';

//ways to get text inside an element
title.textContent; // displays span even if it is displayed none
title.innerHTML; //gives whole html value inside the element
title.innerText; //displays span but only if it is not displayed none



