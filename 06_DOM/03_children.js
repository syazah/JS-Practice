// If we have selected a parent element and we want to access its children elements
const week = document.getElementById('week');
console.log(week.children);
//The .children gives the value in HTMLcollection type format. We can apply loops to access each of the element.
console.log(week.firstElementChild); //gives the total html tag of the first element
console.log(week.lastElementChild);//gives the total html tag of the first element
console.log(week.childNodes); //gives all the child nodes, even a linebreak and comments are counted as child nodes
