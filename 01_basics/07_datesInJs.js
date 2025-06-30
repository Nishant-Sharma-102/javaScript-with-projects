const mydate = new Date();
console.log(typeof mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())

const date = new Date("04-23-2025");
//console.log(date);
let someDate = new Date(23,0,2025);
//console.log(someDate.toLocaleString());

someDate.toLocaleString('default',{
    weekday:"long",

});
console.log(someDate);


