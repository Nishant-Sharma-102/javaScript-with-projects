//let str = "  hello ";
let str2 = '  hello  ';

//console.log(str.trim());
//console.log(str2.trim());

let mtr = "hello";
//console.log(mtr.toUpperCase());
// same as .toLowerCase()

let msg= "  ilovecoding   ";
console.log(msg.indexOf("love"));
console.log(msg.indexOf("c"));
console.log(msg.toUpperCase().trim());
let str = "hello";
console.log(str.slice(1,5));
console.log(str.slice())

//replace method

// console.log(msg.replace("love","am"));
// console.log(msg.repeat(3));

let name = "ApnaCollege"
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna", "Our"));

let students=["nishant","naman","karan"];
//console.log(students[1][2]); 

//array is mutable;

  
students[0] = "vikrant";
// console.log(students)
// console.log(students.push("sharma"))
// console.log(students)
// console.log(students.pop())
// console.log(students)

let start = ['january','july','march','august']
//console.log(start.pop());
console.log(start.shift());
console.log(start.shift());
console.log(start.unshift('june'));

console.log(start.unshift('july'));
console.log(start);
//concat array
console.log(start.concat(students));
console.log(start.slice(-1));
console.log(start.splice(0,2,"alas","malas"));
console.log(start.sort());
const num = [5,2,6,3,7];
console.log(num.sort())

console.log(start.splice(0,2,'july','june'));
console.log(start);
console.log(start.reverse())
console.log(start.reverse())

console.log(start.indexOf('june'))

let tictoc= [['X',null,'0'] , [null,'X','0'],['0',null,'0']]

console.log(tictoc);
