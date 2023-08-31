let pass = document.querySelector("#password")
let conf= document.querySelector("#confirmation")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
if(pass.value!==conf.value){
    pass.style.borderColor="red"
    conf.style.borderColor="red"
}
})