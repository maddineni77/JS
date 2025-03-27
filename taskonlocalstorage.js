let container=document.querySelector(".container")
let category=document.querySelector(".category")

async function getdata(){
    try{
        let response=await fetch("http://localhost:8000/products")
        let data=await response.json()
        localStorage.setItem("products",JSON.stringify(data))
        let result= JSON.parse(localStorage.getItem("products"))
        displaydata(result)
    
    
    }catch(err){
        console.log(err)
    }
   
}
function displaydata(products){
    container.innerHTML=``
    products.forEach(obj=>{
        let item=document.createElement("div")
        item.className="item"
        item.innerHTML=`<img class="image" src='${obj.image}'>
        <p>Tilte---${obj.title}<span><b>Price:${obj.price}</b></span></p>
        <p>Description:${obj.description}</p>
        <p>Category:${obj.category}</p>
        <button class='btndele' onclick=deletedata(${obj.id})>delete</button>`
        
        container.appendChild(item)
    })
    
    


}  
function filterProducts() {
    let selectedCategory = category.value;
    let allProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (selectedCategory) {
        let filteredProducts = allProducts.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase());
        displaydata(filteredProducts);
    } else {
        displaydata(allProducts); 
    }
}





async function deletedata(id){
    try{
       let response= await fetch(`http://localhost:8000/products/${id}`,{"method":"DELETE"})
        if(response.ok){
            alert("data deleted")
            getdata()
        }

    }catch(err){
        console.log(err)

    }     
}

category.addEventListener("change", function(){
    filterProducts()
})

 window.addEventListener("DOMContentLoaded",function(){
    getdata()
 })