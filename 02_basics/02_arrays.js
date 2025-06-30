const marvel_heros= ["ironman","thor", "spdman"];

const dc_heros=["flash","batman","superman"];

// marvel_heros.push(dc_heros);
 //console.log(marvel_heros);
 
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

//This is splash method to add two or more arrays in javaScript;

const allheros2 = [...marvel_heros,...dc_heros];
// console.log(allheros2)
// console.log(allheros2[5]);

const newArray = [1,2,3,[3,4,5],4,5,[6,7]];
// console.log(newArray.flat(Infinity));
// console.log(newArray.from);


console.log(Array.isArray("nishant"));
console.log(Array.from("nishant"));
console.log(Array.of("nishant"));
 

