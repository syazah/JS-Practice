const myObject ={
    js : "JavaScript",
    cpp: "C++",
    py: "python",
    rb: "ruby"
}

for (const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
}


//for in loops keys deta hai. arrays me bhi keys dega

//         FOR EACH
const code = ["cpp", "javascript", "pyhton"];
//for each is inbuilt of javascript
code.forEach(function(item){
    console.log(item);
})

code.forEach((item) => {
    console.log(item);
    // for each never returns a value
})

const numbers = [1,2,3,4,5,6];
let newNums = numbers.filter((num) => num > 4 ) //filter returns value