// THE PROBLEM :- We don't want all our code to run all the time. We need to run some code when the user is logged in and some code when he/she is logged out

// THE SOLUTION :- CONTROL FLOW

//1) if-else-else if

if(/* condition */ true){}
else{} // no condition required

if (true) console.log("Hello"); //single line scope
if(true) console.log("hello again"), console.log("and hello again"); //bad practice but is not error
else if(false){ } //multiple conditions 
