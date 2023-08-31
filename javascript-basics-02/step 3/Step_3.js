
// function changes (){
//     var mydiv = document.querySelector("#mydiv");
//     if (inputt.value!==mydiv.value){
//         mydiv.value==inputt.value;
        
//     }
// }
// let mydiv = document.createElement('div')
// let form = document.querySelector('form')
// form.appendChild(mydiv)

// mydiv.innerText = 'Result'
// var inputt = document.querySelector("#name");
// inputt.addEventListener('change', (e) =>{  /* i use event when i need to take smth from another element i've to use e*/
//     mydiv.innerText = e.target.value
// })

let mydiv = document.createElement("div");

let forme = document.querySelector("form") ;

forme.appendChild(mydiv);
mydiv.textContent="result";
console.log(mydiv)
let inputt = document.querySelector("#name");
inputt.addEventListener("change", function(){
    mydiv.textContent=inputt.value;
})