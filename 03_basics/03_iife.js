//immediately Invoked Function Expressions(IIFE)
//to avoid global scope pollution we are use IIFE;

(function add(){
    //Named iife 
    console.log(`connected`);
})();// semicolon is important to execute another code iife

( (name)=>{
    console.log(`connected two ${name}`)
})('nishant')
