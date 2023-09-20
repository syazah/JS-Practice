const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman","flash","batman"];

//isse array ke andar ek aur array aa jaega
marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3]);

// to merge two arrays we use concat
// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

//to merge two arrays we can also use spread
const heros2 = [...marvel_heros, ...dc_heros];
console.log(heros2);

//to flat all arrays or make arrays inside arrays into a single array .flat(2) 2- tells the levels to flat, you can use infinity to flat all
const arrayPower = [1,2,3,[56,867], [1,[3,4]]];
const flattedArrayPower = arrayPower.flat(Infinity);
console.log(flattedArrayPower);

//to make an array from any given value
console.log(Array.from("Azaan"));
console.log(Array.from({name: "Azaan"})); //INTERESTING CASE

//for different numbers
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));
