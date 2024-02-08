window.addEventListener('load', function () {

    let categorySelect = document.getElementById('category')
    fetch('appaccesorios-production.up.railway.app/api/categories')
        .then(response => response.json())
        .then(categories => {

            categories.forEach(element => {
                categorySelect.innerHTML +=
                    `<option value="${element.id}">${element.name}</option>`
            });

        });
    // validacion del frontend

    let form = document.querySelector('form')
    form.addEventListener('submit', function (e) {
        e.preventDefault();

    })

})