window.addEventListener('load', function () {

    let form = document.querySelector('form');
    
    
    form.addEventListener('submit',async function (e) {
        let nick = document.getElementById('nick').value
        let email = document.getElementById('email').value
        let pass = document.getElementById('pass').value
        let img = document.getElementById('img-profile').value

        
        let errors = []
        if(nick.length < 5){
            e.preventDefault()
            errors.push('El nombre debe tener al menos 5 caracteres')
        }
       
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!(email.match(mailformat)))
        {
            e.preventDefault()
            errors.push('Ingrese un email válido');
        }
        let passformat =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
        if(!(pass.match(passformat)))
        {
            e.preventDefault()
            errors.push('Error en la contraseña, deben ser mínimo 5 caracteres, contener al menos una minúscula, una mayúscula, un dígito y un caracter especial.');
        }
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
        let result= await fetch('http://localhost:3001/user/api/existEmail',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { email: email  })
        }
    ).then( (response)=> {
        return response.json();
    })

    if(result.data){
        e.preventDefault();
        errors.push('El email ya existe')
    }
        if(errors.length > 0){
            document.querySelector('.errorsList').innerHTML = ''
            errors.forEach(error => {
                document.querySelector('.errorsList').innerHTML += '<div class="error">'+ error + '</div>'
            });
        }
    })


});