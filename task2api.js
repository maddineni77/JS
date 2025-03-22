let container=document.getElementById("container")
let loader=document.getElementById("loader")
const url = 'https://imdb-top-1000-movies-series.p.rapidapi.com/list/1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5d418f436fmsh67152de59c977f2p1e3e3ajsn0b2bb0ffa5b3',
		'x-rapidapi-host': 'imdb-top-1000-movies-series.p.rapidapi.com'
	}
};
async function getdata(){
try {
	const response = await fetch(url, options);
    if(!response.ok){
        throw new Error("inavlid ",response.status,response.statusText)
    }
	const result = await response.json();
	displaydata(result)
    loader.remove()
} catch (err) {
	console.log(err);
}}
function displaydata(obj){
       console.log(obj)
        let result=obj.result
        console.log(result)
        result.forEach(obj1=>{
            let item=document.createElement("div")
            item.className="card"
            item.innerHTML=`
            <img src='${obj1.Poster_Link}' class="card-img-top">
            <div class="card-body">
            <p class='rank'>Rank:${obj1.rank}</p>
            <p class='director'>Director:${obj1.Director}</p>
            <p class='rating'>Rating:${obj1.IMDB_Rating}<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>

            </div>`
            container.appendChild(item)
        

        })
        
       

}
window.addEventListener("DOMContentLoaded",function(){

       
        getdata()

       
})
