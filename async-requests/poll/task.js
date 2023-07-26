let title = document.getElementById("poll__title")
let buttons = document.getElementById("poll__answers")

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = 'json'
xhr.send()
xhr.onreadystatechange = function () {
    if(xhr.readyState === xhr.DONE) {
        title.textContent = xhr.response.data.title
        let ans = xhr.response.data.answers
        let ind = xhr.response.id
        let num = 0
        console.log("index ", ind)
        for(an of ans) {
            buttons.insertAdjacentHTML(`afterbegin`, `<button class="poll__answer" id= "poll__answer__${num}" > ${an} </button>`)
            let bt = document.getElementById(`poll__answer__${num}`)
            bt.onclick = function() {
                let idOfAns = bt.id
                let a = idOfAns.substring(idOfAns.length, idOfAns.length - 1)
                let anNum = parseInt(a, 10)
                alert("Спасибо, ваш голос засчитан!")
               
                let xhr1 = new XMLHttpRequest()
                xhr1.addEventListener("readystatechange", () => { 
                    if(xhr1.readyState === xhr1.DONE) {
                        while(buttons.firstChild) {
                            buttons.removeChild(buttons.firstChild)
                        }
                        let resAn = xhr1.response.stat
                        for(a in resAn){
                            buttons.insertAdjacentHTML(`afterbegin`, `<div>${resAn[a]["answer"]} : ${resAn[a]["votes"]}%</div>`)
                        }
                    }
                 });
                xhr1.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
                xhr1.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr1.responseType = 'json'
                xhr1.send( `vote=${ind}&answer=${anNum}` );
            }
            num++
        }
    }
}