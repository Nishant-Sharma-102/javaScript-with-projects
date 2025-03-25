//Trafic signal 

let colour;
if(colour==="red"){
    console.log("please stop")
}else if(colour ==="yellow"){
    console.log("slow down")
}else{
    console.log("Go .")
}

// Popcorn
let size = "XL"
if(size==="XL"){
    console.log("price is 250")
}else if(size==="L"){
    console.log("price is 200")
}else if(size==="M"){
    console.log("price is 100")
}else{
    console.log("price is 50")
}
    //Using switch statement

    let day = 9;
    switch(day){
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("MONDAY");
            break;
        case 3:
            console.log("TUESDAY");
            break;
        case 4:
            console.log("WEDNESDAY");
            break;
        case 5:
            console.log("THURSDAY");
            break;
        case 6:
            console.log("FIRDAY");
            break;
        case 7:
            console.log("SATURDAY");
            break;
            default:
                console.log("calendar break")
    }