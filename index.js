let clicked = false;
let nameArray =[]
let counter =0;
class App{
    constructor(){
        const nameArray = []
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
        item.id = "cookie"
        item.classList.add('movie');
        //properties
        const prop = Object.keys(movie)

        prop.forEach((propName)=>{
            const span = this.createSpan(propName, movie[propName])
            item.appendChild(span)
        })
        const del  = document.createElement('button')
        del.textContent = 'Delete'
        del.id = "delete"
        del.addEventListener('click', this.removeMovie.bind(this,movie))
        item.appendChild(del);

        const fav  = document.createElement('button')
        fav.textContent = 'Favorite a Movie'
        fav.id = "fav"
        fav.addEventListener('click', this.favMovie.bind(movie))
        item.appendChild(fav);

        return item
    }
    favMovie(event){
        const button = event.target.closest('#cookie')
        if(counter%2 === 0){
            button.style.color = "red"
        }
        else{
            button.style.color = "blue"
        }
        counter++;
    }

   removeMovie(name,event){
        const button = event.target.closest('#cookie')
        //const item = document.getElementById('#movies');
        button.remove(button);

        const i = nameArray.indexOf(name)
        nameArray.splice(i,1)

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
    f.reset()
    f.movieName.focus();
}

}
const app = new App();


