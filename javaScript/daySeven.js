//use this in js


const student={
    name:"nishant",
    class:12,
    rollno:67,
    course:"Btech",
    eng:12,
    math:11,
    phy:13,
    avgerage(){
       // console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
 //console.log(`${this.name} class${this.class} got avg marks = ${avg}`);  
    }
}

// try catch
// console.log("hello1");
// console.log("hello1");

// try{
//     console.log(a);
// }catch(err){
//     console.log("catch error a is not defined");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");

// ARROW FUNCTION

const sum = (a,b)=>{
  return a+b;
};
//console.log(sum(12,12));
//if we have single variable we dont require parenthesis

const cube = (n)=>{
    return n*n*n;

};
//console.log(cube(3));
setTimeout(()=>{
    //console.log("Nishant sharma")
},4000);

console.log("helloo I am! ")
setTimeout(()=>{
    console.log("bye !");
},3000);
console.log(" a coder thu thu!!")

setInterval(()=>{
    console.log("hello world");
},2000);
