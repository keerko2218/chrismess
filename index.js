
const form = document.querySelector("#movieForm")

const nameArray =[]

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
    //const mTotal = createSpan();
    
    item.style.color = "blue"
    mName.style.color ="purple"
    mYear.style.color = "DarkSlateBlue"

    movieName.color = "blue"
    
    mName.textContent = movieName + " "
    mYear.textContent = movieYear

    const nameObject = {
        movie:  mName.textContent,
        year:   mYear.textContent
    }
    

    nameArray.push(nameObject);

    //mTotal.textContent = mName + mYear;

    //nameArray.push(mTotal);

    item.appendChild(mName)
    item.appendChild(mYear)

    const list = document.querySelector("#movies")
    list.appendChild(item)

    
/*
    const del = document.createElement("button")
    list.appendChild(del)
    del.textContent = "Delete"
    del.name = "delete"
    const fav = document.createElement("button")
    fav.textContent = "Favorite this movie"
    list.appendChild(fav)
*/
    
    f.reset();
}

function favMovie(event){
    event.preventDefault();
    const p = event.target
    updateMovies();
}

form.addEventListener('submit', updateMovies)
form.addEventListener('fav', favMovie)




