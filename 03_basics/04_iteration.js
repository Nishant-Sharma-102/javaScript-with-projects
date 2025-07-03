const arr = [1, 2 ,3 ,4];

for (const n of arr) {
  //console.log(n);
    
}
const greetings = "hello sharma";

for(const greets of greetings){
    //console.log(greets);
    
}

const hero = ['superman', 'batman','kabadi'];

for(  const print_hero of hero){
     //console.log(print_hero.indexOf('khiladi'));
    
}

for(const n of arr){
   // console.log(n)
}


 hero.forEach((print)=>{
    // console.log(print);
 })

 arr.forEach((num)=>{
   // console.log(num);
 })

 //arr.forEach((number)=> console.log(number));

 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
 
myCoding.forEach((item)=>{
   console.log(item.languageFileName)
})

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks= books.filter((bk)=>{
   return bk.genre==='History'
 })
 console.log(userBooks)


 const number = [1,2,3,4,5];

  const myNum = number
                .map((n)=> n*5)
                .map((n)=>n+2)
                .filter((n)=> n>=15);
                
 console.log(myNum)