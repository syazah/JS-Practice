//adding element using function
function addEl(lang){
    const li = document.createElement('li');
    li.innerHTML = `${lang}`; // will traverse through nodes
    document.querySelector('ul').appendChild(li);
}

addEl("python");

//optimised approach
function addElOptimised(lang){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    document.querySelector('ul').appendChild(li);
}
addElOptimised("cpp");

// to remove : get the element and then use .remove()
