//PROBLEM :- Many times two values are returned from firebase or any other site they may be null or undefined
//NULLISH COALESCING OPERATOR (??) : it rejects null or undefined value if other value is present


let val1 = 5 ?? 10
let val2 = null ?? 10;
let val3 = undefined ?? 10;
let val4 = undefined ?? null;
let val5 = null ?? undefined;
let val6 = null ?? 10 ?? 20;
console.log(val1); //first value is assigned
console.log(val2); //value other than null is assigned
console.log(val3); //value other than undefined is assigned
console.log(val4); // first value
console.log(val5); // first value


//TERNIARY OPERATOR
    // condition ? true : false
let num = 1000;
num > 100 ? console.log("Yes") : console.log("False");
