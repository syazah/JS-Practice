const div = document.createElement('div');
div.id = "myId";
div.className = "main";

//to write custom attributes
div.setAttribute("title", "gen title"); // this will create a new attribute named title and will set it to gen title
//all these are currently in the memory and now to get it on the window we just need to append this in the document

document.append(div); //this will show the div element on our window 