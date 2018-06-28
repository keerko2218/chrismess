let clicked = false;
let nameArray =[]
class App{
    constructor(){
        this.nameArray = []
        const form = document.querySelector("#movieForm")
        form.addEventListener('submit',(ev)=>{
            ev.preventDefault()
            this.updateMovies(ev)
        })

    }
    removeFunc(movie, ev){
        const button = ev.target;
        const item = button.closest(".movie")
        item.parentNode.removeChild(item);
    
        const i = this.nameArray.indexOf(movie)
        this.spells.splice(i,1)
    
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
    nameArray.push(nameObject);
   
    

/*
    const del = this.createButton("Delete","delete")
    list.appendChild(del)
    del.addEventListener('click', this.deleteMovie)
    
    const fav = this.createButton("Favorite this movie", "favorite")
    list.appendChild(fav)
    fav.addEventListener('click', this.favMovie)
    if(clicked){
        
        clicked = false;
    }
*/
    const button = document.querySelector('#delete')
    button.addEventListener('click', this.removeFunc(,)

    f.reset();
    f.movieName.focus()
}




}
const app = new App();


