console.log("It Works!")

const button = document.querySelector('button')

const up = function (){
    const p = document.querySelector("#changed")
    p.textContent = document.querySelector("#submit").value
}

button.addEventListener('click', up)


let input = document.querySelector("#submit")

input.addEventListener("keypress", function(event){
    if(event.which === 13){
        console.log("Hello")
        button.click();
        event.preventDefault();

    }    
})


//console.warn("Hello")