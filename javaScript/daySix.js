//function
function hello(){
    console.log("hello world");

}
//hello();

function adulthood(){
    let age = 10;
    if(age>=18){
        console.log("is adult")
    }else{
        console.log("is not adult")
    }
}
//adulthood();

function name(){
    console.log("Nishant sharma");
    console.log(" sharma");
}
// name();

//rolldice
function rollDice(){
    let rend = Math.floor(Math.random()*6)+1;
    console.log(rend);
}
//rollDice();

function avg(a,b,c){
    console.log((a+b+c)/3);
}
//avg(12,10,8);

function multiply(){
    for(let i =3; i<=30; i=i+3){
        console.log(i);
    }
}
//multiply();


//methods
const calc = {
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
 console.log(calc.mul(3,4));

 const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
 };
 console.log(calculator.add(6,8));