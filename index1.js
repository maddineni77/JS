let container=document.getElementById("container")
let btn=document.getElementById("btnloader")
let loader=document.getElementById("loader")
btn.addEventListener("click",function(){
    btn.disabled=true
    loader.style.display='inline-block'
    setTimeout(()=>{
        btn.disabled=false
        loader.style.display='none'
    },6000)
    let title=document.getElementById("title")
    let price=document.getElementById("price")
    let description=document.getElementById("description")
    if(title.value==""||price.value==""||description.value==""){
        alert('enter the data')

    }else{
        let options={
            "method":"POST",
            "headers":{
                "content-Type":"application/json"
            },
            "body":JSON.stringify({
                "title":title.value,
                "price":price.value,
                "description":description.value
            })
        }
    
    fetch("https://honored-longhaired-beet.glitch.me/products",options)
    .then(res=>{
        if(res.ok){
            title.value=""
            price.value=""
            description.value=""
            getData()
            alert("data Added ")
        }
    })
    .catch(err=>console.log(err))
}
})
function getData(){
    fetch("https://honored-longhaired-beet.glitch.me/products")
    .then(res=>res.json())
    .then(data=> displayData(data))
    .catch(err=>console.log(err))
}
function displayData(products){
    container.innerHTML=``
    products.forEach(obj=>{
        let item=document.createElement("div")
        item.className="item"
        item.innerHTML=`<img  src="${obj.image}"class="img">
        <p class="title">${obj.title}</p>
        <p class="price">price-${obj.price}$</p>
        <p class="description">description:${obj.description}</p>
        <button class="btn " onclick=deleteData('${obj.id}')>Delete</button>`
        container.appendChild(item)
    })

}

 function deleteData(id){
    console.log(id)
let options={
    "method":"DELETE"
}
fetch(`https://honored-longhaired-beet.glitch.me/products/${id}`,options)
.then(res=>{
    if(res.ok){

        getData()
        alert("data deleted")
    }
})
.catch(err=>console.log(err))

}
getData()