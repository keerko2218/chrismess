
const form = document.querySelector("#movieForm")

function createSpan(){
   return document.createElement('span')
}

function updateMovies(event){
    event.preventDefault();
    
    const f = event.target
    const movieName = f.movieName.value
    const movieYear = f.movieYear.value 

    const item = document.createElement('li')
   
    const mName = createSpan();
    const mYear = createSpan();

    item.style.color = "blue"
    mName.style.color ="purple"
    mYear.style.color = "DarkSlateBlue"

    mName.textContent = movieName + " "
    mYear.textContent = movieYear

    item.appendChild(mName)
    item.appendChild(mYear)

    const list = document.querySelector("#movies")
    list.appendChild(item)
    
    f.reset();
}

form.addEventListener('submit', updateMovies)




