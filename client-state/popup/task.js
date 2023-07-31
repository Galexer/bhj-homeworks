let x = document.getElementsByClassName("modal__close")
let elem = document.getElementById("subscribe-modal")

elem.classList.toggle("modal_active")

document.addEventListener("DOMContentLoaded", () => {
    if(document.cookie){
        elem.classList.toggle("modal_active")
    }  
  });

x[0].addEventListener("click", () => {
    elem.classList.toggle("modal_active")
    document.cookie = 'coookie=1';
  });
