{} // is called scope
{
    var a =20;
    let b = 30; 
}

console.log(a);
//console.log(b);//this will give error as var is not braces scoped. Thus we should not use var and always use const or let.

//scope ke andar ki value bahar nahi jaani chahiye isliye let use hota hai
