

// document.addEventListener("DOMContentLoaded",function(){
//     var name = document.getElementById("name");
//     var surname = document.getElementById("surname");
//     var city = document.getElementById("city");
//     var validateBtn= document.getElementById("validate")

//     validateBtn.addEventListener("click", function(){
//         var Username = name.value;
//         var Surname = surname.value;
//         var City =city.value;
//         alert("Nom:"+ Username +"\nPrenom:"+ Surname+"\nVillage:"+ City)
//     })
//     })

 function submiting(){
        let name = document.forms["form1"]["name"].value;
    let surname =document.forms["form1"]["surname"].value;
    let city =document.forms["form1"]["city"].value;

    window.alert("Nom:"+ name +"\nPrenom:"+ surname+"\nVillage:"+ city);

 }
 

 