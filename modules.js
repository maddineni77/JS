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

let arr=[1,2,3,"jddns",5,true]
let arr1=[...arr,4,5,false]
function read(...arr2){
    return arr2

}
read(arr1)


 export  default displayData
 export {obj,a,disc,arr1,read}
