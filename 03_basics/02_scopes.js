{}  //-> this is called method scope

function one(){
    const username = "nishant";
    function two(){
        const website = "youtube";
        console.log(username+" "+ website);
    }
    //console.log(website);
    two();
}
one();


if(true){
    const name = "sharma";
    function three(){
        const age = 68;
          console.log(name+" "+age);
    }
    three();
}

//console.log(name);


//++++++++++++++interesting thing+++++++++++++++++++++++++++

 console.log(addtwo(4));//-> not give error

function addtwo(num1){
    return num1+1;
}
//console.log(sum(5));  //-> give error ** hoisting**

const sum = function addthree(num1){
    return num1+2;
}

//ARROW FUNCTION

const addTwoNumbers = ()=>{
    return num1+num2;
}
const addTwoNumberss = ()=> (num1+num2);


console.log(addTwoNumbers(5,5));