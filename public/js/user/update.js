window.addEventListener('load', function () {

    let form = document.querySelector('form');
    
    
    form.addEventListener('submit',async function (e) {
        
        let img = document.getElementById('img-update').value

        
        let errors = []
        
        if(img != ''){
            e.preventDefault()
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


});