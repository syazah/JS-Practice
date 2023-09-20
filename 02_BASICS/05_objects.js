//DESTRUCTURING AN OBJECT
const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor:"Hitesh"
}

//to access the values inside object we have to continuously write object name and then use . but there is another way to do that. 
const {courseInstructor} = course;

console.log(courseInstructor);

//renaming
const {courseInstructor: instructor} = course;
console.log(instructor);

//APIs : APNA KAAM KISI AUR KE SIR PAR DAAL DO
//APIs are written in json format which looks like this
/* 
1)
{
    "name" : "azaan",
    "branch": "cse"
}
2)
[
    {},
    {},
    {}
] 
*/