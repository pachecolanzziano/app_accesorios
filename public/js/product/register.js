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
    let brandSelect = document.getElementById('mark')
    fetch('http://localhost:3001/api/brands')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                brandSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let memorySelect = document.getElementById('memory')
    fetch('http://localhost:3001/api/memories')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                memorySelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let ramSelect = document.getElementById('ram')
    fetch('http://localhost:3001/api/rams')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                ramSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });
    let colorSelect = document.getElementById('color')
    fetch('http://localhost:3001/api/colors')
        .then(response => response.json())
        .then(list => {
            
            list.forEach(element => {
                colorSelect.innerHTML+=
                `<option value="${element.id}">${element.name}</option>`
            });

        });


    


    // validacion del frontend

    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        
        let name = document.getElementById('name').value
        let category = document.getElementById('category').value
        let color = document.getElementById('color').value
        let mark = document.getElementById('mark').value
        let memory = document.getElementById('memory').value
        let ram = document.getElementById('ram').value
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
        if(color == ''){
            e.preventDefault()
            errors.push('Seleccione un color')
        }
        if(mark == ''){
            e.preventDefault()
            errors.push('Seleccione una marca')
        }
        if(memory == ''){
            e.preventDefault()
            errors.push('Seleccione una memoria')
        }
        if(ram == ''){
            e.preventDefault()
            errors.push('Seleccione una memoria RAM')
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