let container=document.createElement("div")
container.className="container "
function fetchdata(){
    fetch("https://fakestoreapi.com/products")
        .then(response=> response.json())
        .then(data=>displaydata(data))
        .catch(err=>console.log(err))
    
}
function displaydata(products){
    for (let obj of products){
        let item=document.createElement("div")
        item.className="item"
        item.innerHTML=`<img src='${obj.image}' class='image'>

        <p class='text'>${obj.title}-<span 2>${obj.price}</span></p>
        <p class='description'>${obj.description}</p>
        <p class='rating'>${obj.rating.rate}</p>


        `
        container.appendChild(item)
        



    }
    loader.remove()
    document.body.appendChild(container)
}
fetchdata()