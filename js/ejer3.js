document.getElementById('btn_idEdad')
.addEventListener('click', function () {
    let nombre = document.getElementById('verNom').value;
    let edad = document.getElementById('verEdad').value;
    if (!nombre || !edad) {
        document.getElementById("verEdadNom").innerText = ("Debe rellenar los campos completos");
    } else {
        if(edad<=0 || edad>=125){
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", ingresaste una edad incorecta, vuelve a escribirla");
        }else{
        if (edad>=18) {
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", eres mayor de edad");
        }else{
            document.getElementById("verEdadNom").innerText = ("Hola "+nombre+", eres menor de edad");
        }
    }
    }
});