
for(let i= 1; i<=5; i++){
    //console.log(i);
}

//print odd number
for(let i= 1; i<=20; i=i+2){
    //console.log(i);
}
//print even numbers
for(let i= 1; i<=20; i=i+2){
   // console.log(i);
}
//print multiplication
let n= 50;
for(let i =4; i<=n; i=i+4){
    //console.log(i);
}

//while loop

let i = 5;
while(i<=5){
    console.log(i);
    i++;
}

while(i>=1){
    console.log(i);
    i--;
}
//guess fav movie

// const favmov = "avatar";
//   let guess = prompt("please enter your favmov");
//   while((guess=favmov)&&(guess!="quit")){
//     guess = prompt(" not correct !!please try again")
//   }
//   if(guess==favmov){
//     console.log("congrats!!");
//   }else{
//     console.log("you are quit");
//   }

let fruit =["mango","apple","orange","banana"];
for(let i = 0; i<fruit.length; i++){
  console.log(i,fruit[i]);
}
  let heros = [["thor","ironman","captain"],["flash","batman","wonderwoman"]];
 for(let i= 0; i<heros.length; i++){
  for(let j = 0; j<heros[i].length; j++){
    console.log(heros[i][j],heros.length,heros[i]);

  }
 }



 //To do app.
 let todo = [];
let req = prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("you are quittting");
        break;
    }
     if(req =="list"){
         console.log("__-_____--________");
        for(let i = 0; i<todo.length; i++){
            console.log(i , todo[i]);
        }
            console.log("___---__________");
     }else if(req=="add"){
       let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
     }else if(req=="delete"){
        let idx = promp("please enter the task you want to delete");
        todo.splice(idx,1);
        console.log("task deleted!!")
     }else{
        console.log("wrong requst!! ")
     }
     req = prompt("please enter your request");
    
}