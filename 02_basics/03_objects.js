//Singleton
//object.creation

//object literals

const mySym = Symbol("key1");
const jsUser={
     name: "nishant",
     [mySym]:"myNameiskey",
     class:12,
     email:"nishagmailcom",
     course:"Btech",
};
// console.log(jsUser.name);
// console.log(jsUser.class);
// console.log(jsUser["course"]); 
// console.log(jsUser.class);
// console.log(jsUser[mySym]);

//Change vallue 

jsUser.email = "vishagmail.com";
//console.log(jsUser.email);

//Object.freeze(jsUser);
jsUser.email = "vikkugmail.com";
//console.log(jsUser);

jsUser.greeting=function(){
    console.log(`Namaste js ${this.name}`);
}

//console.log(jsUser.greeting());


//Object structure

const course={
    name:"javaScriptcourse",
    instructer :"hitesh",
    price:999,

}
const{instructer:techer} = course;
console.log(techer);