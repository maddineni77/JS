 let obj={
    "name":"m venkat",
    "age":22
}
let a=10
function disc(callback){
    callback()


}
disc(()=>{
    console.log("callback")
});
function displayData(){
    console.log("display data")
}
displayData()
async function getData(){
    try{
        let res=  await fetch("https://dummyjson.com/products")
        let data= await res.json()
        console.log(data)
    }catch (err){
        console.error(err)

    }
    
}
getData()
let arr=[1,2,3,"jddns",5,true]
let arr1=[...arr,4,5,false]
function read(...arr2){
    return arr2

}
read(arr1)


 export  default displayData
 export {obj,a,disc,getData,arr1,read}
