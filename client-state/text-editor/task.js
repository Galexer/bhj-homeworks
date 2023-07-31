let text = document.getElementById("editor")
let butt = document.getElementById("butt")
let key = "keys"

window.addEventListener('input', function (e) {
    localStorage.setItem(key, text.value)
   }, false);

document.addEventListener("DOMContentLoaded", () => {
    text.value = localStorage.getItem(key);
  });
    
butt.addEventListener("click", ()=> {
    text.value = ""
    localStorage.clear()
})