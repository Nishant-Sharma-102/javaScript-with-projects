//object literals

//console.log("hello world");
const post = {
    username: "@nisant_so3",
    content: "traveling",
    likes: 100,
    reposts: 5,
    tags: ["Naman","karan","garv"]
};


// console.log(post);
// console.log(post.username);
// if we want to change in object literals;


post.username = "@vikrant_s03";
post.reposts = 70;

post.gender = "male";
console.log(post.gender);
console.log(post.username);
console.log(post.reposts);

// Object of Objects

// these objects are my friends::
const classinfo ={
    nishant:{
        class:12,
        gender:"male",
        rollno: 67,
    },
    aman:{
        class:11,
        gender:"female",
        rollno:32,
    },
    karan:{
        class:12,
        gender:"female",
        rollno:15,
    },
    naman:{
      class:12,
      gender: "babu",
      rollno:63,
    },
};
console.log(classinfo.naman);
console.log(classinfo.nishant);
console.log(classinfo.karan);
console.log(classinfo.aman);
console.log(classinfo);

//Crete random integers

//beetwen 1 to 100;
//console.log(Math.floor(Math.random()*100)+1);

//beetwen 1 to 5;
console.log(Math.floor(Math.random()*10/2)+1);

//Number guessing game

const max = prompt("enter max number");
const random =Math.floor(Math.random()*max)+1;
let guess = prompt("enter your guess ");
while(true){
    if(guess=="quit"){
        console.log("you are quitting");
        break;
    }
    else if(guess==random){
    prompt("you are right congrats!!", random);
    break;
    }else if(guess<random){
       guess= prompt("enter large value!!")
    }else{
      guess=  prompt("enter small value!!");
    }
}