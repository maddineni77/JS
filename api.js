let container=document.getElementById("container")
let loader=document.getElementById("loader")
async function getdata(){
	 let response=await fetch("https://dog.ceo/api/breeds/image/random")
     if (!response.ok){
		throw new Error("invalid ",response.status)
	 }
	 let result= await response.json()
	
	 displaydata(result)
	 loader.remove()

}
function displaydata(obj){
	
	container.innerHTML=`<div class='item'>
	<img  class="image" src="${obj.message}">
	</div>`
	
	
}







window.addEventListener("DOMContentLoaded",function(){
    
	setInterval(()=>{
       getdata()
	},2000)
	
})