function sayMyName(){
    // console.log("namaste ji");
    // console.log("n");
    // console.log("i");
    // console.log("s");
    // console.log("h");
    // console.log("a");
    // console.log("n");
    // console.log("t");
    
}
sayMyName();

//add two numbers
function addTwoNumbers(numbers1,numbers2){//numbers is called parameters
    console.log(numbers1+numbers2);
    return;
    console.log("is correct");//-> unreachable code
}
// addTwoNumbers(3,4);//->7// or 3,4 are called arguments
// addTwoNumbers(3,"4"); //->34
// addTwoNumbers("3", "4");//->34

function logInUserMessage(userName){
    if(userName===undefined){
         console.log("please enter valid name");
         return;
    }
   return `${userName} just loggidIN`
}

console.log(logInUserMessage());

function add(...num1){  //This method is called spread method
   return num1;
}

console.log(add(2,4));


