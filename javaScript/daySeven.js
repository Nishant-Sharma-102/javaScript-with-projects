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
        console.log(this);
        let avg = (this.eng+this.math+this.phy)/3;
 console.log(`${this.name} class${this.class} got avg marks = ${avg}`);
    }
}

console.log("hello world");