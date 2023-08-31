let text=document.querySelector("#text")
let color = document.querySelectorAll(".color")

color.forEach((color)=>{
    color.addEventListener("click",(e)=>{
        if( e.target.classList[1]==="green"){  /* {1} is the index of type of color so class color is 0 and the type of color is 1*/ 
            text.style.color="green"
        }
        else if(e.target.classList[1]==="red"){
            text.style.color="red"
        }
        else if (e.target.classList[1]==="blue"){
            text.style.color="blue"
        }
       
    })
})

