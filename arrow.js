/* What is an Arrow Function
->the function which doesnot have keyword 'Function' and it is defined with arrow =>
    syntax:
            var reference variable=()=>{
                statements
                 return values
                 } 
 --named function syntax:
                       function functionName(){
                          statements 
                          return value
                          }
 the only differnce between named function and a Arrow function is the Keyword FUNCTION and 
 another difference is arrow function is assigned to variable
*/ 
//2.conversion
function add(a,b){ //named function
    return a+b
}
var add=(a,b)=>a+b // Arrow function
console.log(add(233,322))
//3.
function square(n){
    return n*n
}
var square =n=>n*n
console.log(square(25))
//4.single parameter in arrow function
var square=(n)=>n*n// with paranthesis
var square=n=>n*n// without paranthesis is just for to look code clean and readability purpose
console.log(square(34))
//4.cube of a number
var cube=n=>n**3// Arrow function with implicit return 
var cube=n=>{    // Arroe function with explicit return 
    return n*n*n
}
console.log(cube(2))
///5.subraction
var sub=(a,b)=>b-a // this is function with single expression so no need {}and with implicit return
console.log(sub(5,10))
//6.Arrow function with no parameters
var noparameters=()=>console.log('hello world')
noparameters()// calling Arrow function with no parameters