let date = new Date()
console.log(date.toString());
console.log(date.toDateString());

//create your own date
let myDate = new Date(2003,7,4);//months start from 0 -jan, 1- feb, 2- march...;
console.log(myDate.toDateString());
//TIME STAMPS
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(date.getTime());    