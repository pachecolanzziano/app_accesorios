window.addEventListener('load', function () {
    
    let categorySelect = document.getElementById('category')
    fetch('http://localhost:3001/api/categories')
        .then(response => response.json())
        .then(categories => {
            
            categories.forEach(element => {
                categorySelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    // validacion del frontend

    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        
        let name = document.getElementById('name').value
        let category = document.getElementById('category').value
        let img = document.getElementById('imgCel').value
        
        let errors = []

        if(name.length < 5){
            e.preventDefault()
            errors.push('El nombre debe tener al menos 5 caracteres')
        }
        if(category == ''){
            e.preventDefault()
            errors.push('Seleccione una categoría') 
        }
        
        if(img == ''){
            e.preventDefault()
            errors.push('Seleccione una imagen')
        }else{
            let arrImg=img.split('.')
            let extension=arrImg[arrImg.length-1]
            let validExtension=['jpg','png','jpeg','gif']
            if(validExtension.indexOf(extension)==-1){
                errors.push('La extensión de la imagen no es valida, solo se aceptan las siguientes extensiones: jpg, png, jpeg, gif')
                e.preventDefault()
            }
        }

        if(errors.length > 0){
            document.querySelector('.errorsList').innerHTML = ''
            errors.forEach(error => {
                document.querySelector('.errorsList').innerHTML += '<div class="error">'+ error + '</div>'
            });
        }
        
    })

})