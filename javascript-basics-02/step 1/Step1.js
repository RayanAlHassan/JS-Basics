// document.addEventListener("DOMContentLoaded", function () {
//     var imageElement = document.querySelector("#image1");

//     imageElement.addEventListener("mouseover", (e)=>{
//         e.target.setAttribute('src','./images/image1_2.jpg')
//     });
//     imageElement.addEventListener("mouseout", revertImage);

    

//     function revertImage() {
//         // Revert the src attribute of the image on mouse out
//         imageElement.setAttribute ("src','./images/image1_2.jpg") ; // Replace with the original image source
//     }
// });

document.addEventListener('DOMContentLoaded',function(){

    var imgElemet=document.querySelector("#image1");

    imgElemet.addEventListener("mouseover", (e)=>{
        e.target.setAttribute("src","./images/image1_2.jpg  ")   } );

        imgElemet.addEventListener("mouseout", (e)=>{
            imgElemet.setAttribute("src", "./images/image1.jpg")
        })
});