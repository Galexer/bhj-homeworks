let progress = document.getElementById('progress')
progress.value = 0 

document.forms.form.addEventListener('submit', e => {
    e.preventDefault()
    
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", () => { 
        console.log(xhr.readyState)
        progress.value = xhr.readyState / 4
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    let formData = new FormData(document.forms.form)
    xhr.send(formData)
})