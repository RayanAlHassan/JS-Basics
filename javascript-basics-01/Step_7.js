// function form7(){
//     var shoe = document.forms["step7"]["shoe_size"].value;
//     var year = document.forms["step7"]["year"].value;

//     window.alert(((((shoe*2)+5)*50)-year)+1766);

// }


document.addEventListener("DOMContentLoaded",function(){
    let shoe = prompt("enter your size of shoe  ");
    let year = prompt("enter your year of birth");
  

   
    window.alert(((((shoe*2)+5)*50)-year)+1766)
})