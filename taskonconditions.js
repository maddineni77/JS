function findLarge(num1,num2,callback){
    return callback(num1,num2)+5
       


}
console.log(findLarge(12,20,(n1,n2)=>{
    if (n1>n2){
        return n1

    }else{
        return n2
    }

}))
function caluculate(num1,num2,callback){
    return callback(num1,num2)*3
}
console.log(caluculate(5,5,(n1,n2)=>{
    if (n1>n2){
        return n1+n2
    }else if(n2>n1){
       return n1-n2
    }
    else if(n1==n2){
        return 0
    }
}))
function checkevenodd(num1,callback){
     var res=callback(num1)
     return `${res} number`
}
console.log(checkevenodd(8,(num1)=>{
    if (num1%2==0){
        return 'Even'

    }else{
        return 'Odd'
    }
}))
function checksign(num,callback){
   
   return `${callback(num)}value`
}
console.log(checksign(-10,num=>{
    if (num<0){
        return 'negative'
    }else if(num===0){
        return 'zero'

    }else{
        return 'positive'
    }
}))
function multiplyconditionally(num1,num2,callback){
     return callback(num1,num2)*4
}
console.log(multiplyconditionally(4,6,(num1,num2)=>{
    if( num1>num2){
        return num1*num2

    }else if(num2>num1){
        return num1+num2
    }else if(num1==num2) {
        return num1

    }

}))