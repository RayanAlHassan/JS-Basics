
document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.querySelector("#name");

    inputElement.addEventListener("blur", function () {
        alert("Thank you for participating!");
    });
});
