console.log("It Works!")

const button = document.querySelector('button')

const up = function (){
    const p = document.querySelector("#changed")
    p.textContent = document.querySelector("#submit").value
}

button.addEventListener('click', up)

//console.warn("Hello")