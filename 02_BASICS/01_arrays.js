//different type of elements can also be placed in an array of 
const myArrr = [1,2,3,"Azaan"];
//different datatype elements or same datatype elements can be placed inside an array

//PROTOTYPE ARRAY
const myArr = new Array(1,2,3,4);
myArr.push(6);
myArr.pop()
//to place an element in the front 
myArr.unshift(9);
console.log(myArr);

//to add the old array into a new array of string
const newArr = myArr.join()
console.log(typeof newArr);

//slice, splice
/* slice is used to return a copy of the section of an array. Original array is not changed*/
const myN1 = myArr.slice(1,3);
console.log(myN1);
/* splice is used to return a copy of the section of an array, including the last value. Original array is changed and the new arry is extracted from the previous array*/
const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log(myArr);




