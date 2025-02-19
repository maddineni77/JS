//anonymous functions >the function which doesnot have function name 
/*function callfunc(demo){
    console.log(demo)
    console.log(demo(10,20))
}
callfunc(function (a,b){
    console.log('function calling')
    console.log(a+b)
})*/
//syntax for anonymous function 
var demo=function (){
    console.log('anonymous function')
}

demo()
function example(a,d){
console.log('example function')
 return a+d
}
console.log(example(10,20))
//
function generatelowercase(getlowercase){
    console.log(getlowercase)
    
    var res=getlowercase('MADDINENI')
    console.log(res)

}
generatelowercase(function(name){
    return name.toLowerCase()
})
//
function funone(ano){

}
function funtwo(a,b){

}
var funtwo=function(a,b){
    console.log(a+b)
    return a-b
}
/// syntax for declaring the anonymous function as argument to a  named function
//toLowerCase(),toUpperCase()
function withthreeparameters(three){
    console.log(three(1,2,4))
}
var anonymous=function(a,b,c){
    console.log(a+b+c)
    return a-b-c
}
withthreeparameters(anonymous)
//task on callbacks 
function processNumbers(num1,num2,callback){
    console.log(callback(num1,num2))
    return callback(num1,num2)


}
processNumbers(3,4,function(num1,num2){
        res=num1+num2
        
        return  res

})