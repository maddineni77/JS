// online food delivery
function orderreceived(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('order confirmed')
            
        }, 1000);
    })
} 
function preparingfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('food is preparing')

        },3000)
    })
}
function packingfood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('order is packing')
        },2000)
    })
}
function assingning(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('assingning to delivery agent')
        },2000)
    })
}
function delivering(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('delivered')
        },4000)
    })
}
orderreceived().then((res)=>{
    console.log(res)
      preparingfood()

}).then((res)=>{
    console.log(res)
      return  packingfood()
}).then((res)=>{
    console.log(res)
     return assingning()
}).then((res)=>{
    console.log(res)
      return delivering()
}).catch((error)=>{
   console.error(error)
})