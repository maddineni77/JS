let container=document.getElementById("container")
let btn=document.getElementById("btnloader")
let loader=document.getElementById("loader")
let titleinput=document.getElementById("title")
let priceinput=document.getElementById("price")
let descriptioninput=document.getElementById("description")
let dsinput=document.getElementById("dsinput")
let url="http://localhost:3000/products"
btn.addEventListener("click", async function(){
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
        let method=dsinput.value?"PUT":"post"
        let mainurl=(method=="PUT")?`${url}/${dsinput.value}`:url
            
    try{ let res=  await fetch(mainurl,{
        method,
        "headers":{
            "content-type":"application/json"
        },
        "body":json.stringify({
            "title":titleinput.value,
            "price":priceinput.value,
            "description":descriptioninput.value
        })
        })
        if (res.ok){
            getData()
            alert((method=="PUT")?"data updated":"data added")
            title.value=""
            price.value=""
            description.value=""

        }
        
        }catch(error){
            console.log(error)

        }
    }
})
 async function getData(){
    try{
    let res=await fetch("http://localhost:3000/products")
    let data=await res.json()
    if (res.ok){
    displayData(data)
    }
    }catch (error){
         console.log(error)
    }
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
        <button class="btn " onclick=deleteData(${obj.id})>Delete</button>
        <button class="update" onclick=updateData(${obj.id})>update</button>`
    
        container.appendChild(item)
    
    })
    

}

 async function deleteData(id){
    console.log(id)
    try{
    let res= await fetch(`http://localhost:3000/products/${id}`,{"method":"DELETE"})
    let data=res.json()
    if(res.ok){

        getData()
        alert("data deleted")
    }}catch(err){
        console.log(err)
    }


}
async function updateData(id){
    console.log(id)
    try{
        let res= await fetch(`http://localhost:3000/products/${id}`)
        
        if(res.ok){
        
            alert("data updated")
        }
        let obj= await res.json()
        dsinput.value=obj.id
            titleinput.value=obj.title
            priceinput.value=obj.price
            descriptioninput.value=obj.description
            getData()
       window.scroll({
        top:0,
        behavior:"smooth"
       })

        
    }catch(error){
        console.log(error)

    }

}
getData()