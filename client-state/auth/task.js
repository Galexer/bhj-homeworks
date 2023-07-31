let form = document.getElementById("signin__form")
let name = document.getElementById("user_id")
let sig = document.getElementById("signin")
let hi = document.getElementById("welcome")
let exit = document.getElementById("exit")

if(window.localStorage.getItem("id")){
    welcome(window.localStorage.getItem("id"))
}

form.onsubmit=(e)=>{
    e.preventDefault();
    let data = new FormData(form)
    console.log(data)
    let xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => { 
        if(xhr.readyState === xhr.DONE){
            if(xhr.response.success) {
                let userId = xhr.response.user_id
                welcome(userId)
            } else{
                e.target.reset()
                alert("Неверный логин/пароль")
            }
        }
    });
    xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/auth' );
    xhr.responseType = 'json'
    xhr.send(data); 
}

exit.addEventListener("click", ()=> {
    window.localStorage.clear()
    location.reload()
})


function welcome(userId) {
    sig.classList.toggle("signin_active")
    window.localStorage.setItem("id", userId)
    name.textContent = userId
    hi.classList.add("welcome_active")
}