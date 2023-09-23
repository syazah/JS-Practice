//IIFE :- IMMEDIATELY INVOKED FUNCTION EXPRESSION
//one usecase is that we can use it to immediately connect a database to our application. It helps us to limit the pollution of global scopes

//named IIFE
(function connectDB(){
    console.log("DB connected");
})(); //here semicolon is necessary

//UNnamed IIFE
(() => {
    console.log(`DB disconnected`);
})();
