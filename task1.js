//task1
function processNumbers(num1,num2,callback){
    return callback(num1,num2)
}
processNumbers(3,4,function(num1,num2){
        var res=num1+num2
        console.log('sum: ',res)  

})
//task2
function greet(callback){
    return callback('Alice')


}
greet(function(name){
     var res='hello'+" "+name
    console.log(res)

})
//task3
function caluculate(num1,num2,callback){
    return callback(num1,num2)

}
caluculate(10,5,function(num3,num4){
     var diff=num3-num4
     console.log('difference: ',diff)

})