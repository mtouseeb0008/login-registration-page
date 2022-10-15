let sign_in_link = document.querySelector("#sign-in-link");
let sign_up_link = document.querySelector("#sign-up-link");
let container = document.querySelector(".container");

sign_up_link.addEventListener("click", ()=>{
    container.classList.add("sign-up-mode")

});

sign_in_link.addEventListener("click", ()=>{
    container.classList.remove("sign-up-mode")

});

const passwordField = document.querySelector("#pass");
const eyeIcon= document.querySelector("#eye");
eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
  });