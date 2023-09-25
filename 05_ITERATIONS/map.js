const myNums = [1,2,3,4,5,6,7];
const neNums = myNums.map((num) => num+10);
console.log(neNums);

//chaining
const newNums = myNums.map((num) => num*10).map((num) => num+1);

//filter me condition hota hai and map me executions karte hain