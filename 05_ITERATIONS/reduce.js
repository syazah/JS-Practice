const myNum = [1,2,3];
const myTotal = myNum.reduce((accumulator, curValue) =>{
    console.log(`${accumulator}, ${curValue}`);
    return accumulator + curValue;
}, 0) // 0 is the initial value of accumulator, we can put any value

const myNTotal = myNum.reduce((acc, cuVal) => acc+cuVal, 0);

console.log(myTotal);
console.log(myNTotal);