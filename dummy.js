let container=document.querySelector(".container")
async  function getdata(){
    try{
        let response=await fetch("https://dummyjson.com/products")
    if(!response.ok){
        throw new Error("invalid http:")
    }
    let data= await response.json()
    localStorage.setItem("products",JSON.stringify(data.products))
     let result=JSON.parse(localStorage.getItem("products"))
    displaydata(result)
    }catch(err){
      console.error(err)
    }
}
function displaydata(arr){
    container.innerHTML=``
    arr.forEach(obj=>{
        let{brand,id,category,description,images,price,title}=obj
       let item=document.createElement("div")
       item.className="item"
       item.innerHTML=`<img src='${images[0]}'>
       <p>Title:${title}<span><b>Price-${price}</b></span>
       <p>description:${description}</p>
       <p><strong>Brand-${brand||"not available"}</strong></p>
       <p>Category:${category}</p>
       <button class="btn" onclick='getmoredata(${id})'>More</button>
       `
       container.appendChild(item)
    })

}
function getmoredata(id){
    window.location.href=`./more.html?id=${id}`
}
window.addEventListener("load",function(){
    getdata()
})