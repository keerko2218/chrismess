class App{
    constructor(){
        const nameArray =[]

        const form = document.querySelector("#movieForm")
        form.addEventListener('submit',(ev)=>{
            ev.preventDefault()
            this.updateMovies(ev)
        })

    }

    createSpan(name, value){
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value + " "
        return span
    }
    createLi(movie){
        const item = document.createElement('li')
        item.classList.add('movie');
        //properties
        const prop = Object.keys(movie)

        prop.forEach((propName)=>{
            const span = this.createSpan(propName, movie[propName])
            item.appendChild(span)
        })
        return item
    }
    createButton(content, id){
        const button = document.createElement("button")
        button.textContent = content
        button.id = id
        return button
    }
updateMovies(event){
    event.preventDefault();    
    const f = event.target

    const nameObject = {
        movie:  f.movieName.value,
        year:   f.movieYear.value
    }
    const item = this.createLi(nameObject)
    const list = document.querySelector("#movies")
    list.appendChild(item)
    item.style.color = "blue"
    //nameArray.push(nameObject);
    f.reset();
    f.movieName.focus()
    //const movieName = f.movieName.value
    //const movieYear = f.movieYear.value 

    
    
    //const mName = createSpan();
    //const mYear = createSpan();
    //const mTotal = createSpan();
    
    
    //mName.style.color ="purple"
    //mYear.style.color = "DarkSlateBlue"

    //movieName.color = "blue"
    
    //mName.textContent = movieName + " "
    //mYear.textContent = movieYear

    

    

    //mTotal.textContent = mName + mYear;

    //nameArray.push(mTotal);

    //item.appendChild(mName)
    //item.appendChild(mYear)

    

    

    const del = this.createButton("Delete","delete")
    list.appendChild(del)
    del.addEventListener('click', this.deleteMovie)
    
    const fav = this.createButton("Favorite this movie", "favorite")
    fav.addEventListener('click', this.favMovie)
    list.appendChild(fav)

}

favMovie(){
    alert("hello")
}
deleteMovie(){
    alert("imma kms")
}
/*
function favMovie(event){
    event.preventDefault();
    const p = event.target
    updateMovies();
}
*/
//form.addEventListener('submit', updateMovies)
//form.addEventListener('fav', favMovie)
}
const app = new App();


