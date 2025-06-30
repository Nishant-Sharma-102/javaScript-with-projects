const myArr = [0,1,2,3,4,5];

console.log(myArr.length);

myArr.push(6);
myArr.pop()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
myArr.unshift(9);
myArr.shift();

const myArr2 = myArr.join();

console.log(myArr);
console.log(myArr2);
 
console.log(typeof myArr);
console.log(typeof myArr2);



//slice method
console.log("A = ", myArr);

console.log(myArr.slice(1,3));
console.log(myArr);

console.log("B = ", myArr);
console.log(myArr.splice(0,3));
console.log(myArr);

