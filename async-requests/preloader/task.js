let icon = document.getElementById("loader")
let car = document.getElementById('items')

let xhr = new XMLHttpRequest() 

let cash = JSON.parse(localStorage.getItem('key'));
if( cash !== undefined) {
    for(an in cash) {  
    car.insertAdjacentHTML(`afterbegin`,`<div class="item"><div class="item__code">${an}</div><div class="item__value"> ${cash[an].Value}</div>
    <div class="item__currency">руб.</div></div>`)
    }
}

xhr.open( 'GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses' ) 
xhr.responseType = 'json' 
xhr.send() 

xhr.onreadystatechange = function () { 
    if(xhr.readyState !== xhr.DONE) { 
        if(icon.classList[1] !== "loader_active") {
            icon.classList.add("loader_active") 
        }
    } 
    if(xhr.readyState === xhr.DONE) {
        localStorage.clear();
        icon.classList.remove("loader_active") 
        let ans = xhr.response.response.Valute
        localStorage.setItem('key', JSON.stringify(ans));
        for(an in ans){ 
            car.insertAdjacentHTML(`afterbegin`,`<div class="item"><div class="item__code">${an}</div><div class="item__value"> ${ans[an].Value}</div>
            <div class="item__currency">руб.</div></div>`)
        }
    }
  } 