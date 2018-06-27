
const form = document.querySelector("#movieForm")


function up(event){
    event.preventDefault();
    const movieName = document.querySelector("#submit").value 
    const clear =  document.querySelector("#submit") 
    const item = document.createElement('li')
    item.textContent = movieName

    const list = document.querySelector("#movies")
    list.appendChild(item)

}

form.addEventListener('submit', up)




