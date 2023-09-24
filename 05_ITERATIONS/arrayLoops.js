// for of
const arr = [1,2,3,4,5];
for (const val of arr) {
    console.log(val);
}

const greetings = "Hello Everyone";
for(const greet of greetings){
    console.log(greet);
}


//MAPS
const map = new Map();//unique entries are done 
map.set("IN", "India");
map.set("KSA", "Saudi Arabia" );
map.set("UAE", "United Arab Emirates");
map.set("USA", "United States Of America");

for (const [key, value] of map) {
    console.log(`${key} : ${value}`);
}