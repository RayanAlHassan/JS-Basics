let pass = document.querySelector("#password")
let conf= document.querySelector("#confirmation")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
if(pass.value!==conf.value){
    pass.style.borderColor="red"
    conf.style.borderColor="red"
}
})
let imge= "image.jpg"

console.log(imge.split("."))   // 0:image 1:jpg
console.log(imge.split("")) // ['i', 'm', 'a', 'g', 'e', '.', 'j', 'p', 'g']
console.log(imge.split(".").pop()) // jpg
console.log(  imge.split(" ").length-1)