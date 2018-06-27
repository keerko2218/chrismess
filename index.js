
const form = document.querySelector("#movieForm")


function up(event){
    event.preventDefault();
    const f = event.target
    const movieName = f.movieName.value
    const movieYear = f.movieYear.value 
    //const clear =  document.querySelector("#submit") 
    const item = document.createElement('li')
    const mName = document.createElement('span')
    const mYear = document.createElement('span')
    //item.textContent = movieName + " " + movieYear
    mName.textContent = movieName + " "
    mYear.textContent = movieYear


    item.appendChild(mName)
    item.appendChild(mYear)

    const list = document.querySelector("#movies")
    list.appendChild(item)
    
    f.reset();
}

form.addEventListener('submit', up)




