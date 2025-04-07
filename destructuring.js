let arr=[1,2,3,4,5,6,77]
let[a,d,,k,j,r,t]=arr// if you want to skip any element in the array by placing kama(,)
console.log(a,d,k,j,r,t) // array destructing in js
// rest operator in js 
const [z,...rest]=arr
console.log(z,rest)
//object destructering 
let obj={
    "name":undefined,
    "age":"22",
    "height":5.8,
    "gender":"male",
    "address":{
        "city":"hyd",
        "state":"amaravati",

    }
}
let {age,height,name:fullname="maddinenivenkatrao",gender,address:{city,state}}=obj
console.log(age,height,fullname,gender,city,state)
let obj1={
    "name":"jeeevan",
    "height":"5.8",
    "city":"nellore",
    "address":{
        "village":"venkatagiri",
        "pincode":23309
    }
}
let{name,height:ht,city:cety,address:{village,pincode}}=obj1
console.log(name,ht,cety,village,pincode)
function restoper(...rest){
    rest.reduce((res,next)=>res+next,0)
}
console.log(restoper(1,2,3,34,55,4))
let aar=[1,3,5,7,9]
aar.unshift(0)
console.log(aar)
aar.shift()
console.log(aar)
aar.pop()
console.log(aar)
aar.push(8,9,10,11)
console.log(aar)
 let aar1=aar.map((num)=>num+5)
 console.log(aar1)
