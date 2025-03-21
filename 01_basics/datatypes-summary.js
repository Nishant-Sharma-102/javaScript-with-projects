// datatypes are two type 
//primitive datatypes or nonprimitive datatypes
// primitive datatypes are ->> String, boolean, number,symbol,bigint,null, undefined these are primitive datatypes

// in primitive datatypes are use stack memory allocation
// and used call by value (means use object copy)

let value = null
//console.log( typeof null) // output is object

let valuee = undefined
//console.log(typeof undefined)// undefined
//***************************************** some memory method for primitive datatypes ****/

let email= "nishant@gamil.com"
let changeemail = email
changeemail = "vikrant@gmail.com"

//console.log(email) // nishant@gmail.com ** mean value is changed
//console.log( changeemail) // vikrant@gmail.com ** mean value is changed


//***************************************** some memory method for nonprimitive datatypes ****/

 let userone = {
     email: "user@google.com",
     upi:"user@ybl",
 }
 let usertwo = userone
 usertwo.email = "change@google.com"
 console.log(userone.email)// change@google.com
 console.log(usertwo.email)// change@google.com
