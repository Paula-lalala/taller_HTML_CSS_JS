let texto= document.getElementById('btn_contar')
.addEventListener('click', function () {
    let verTexto = document.getElementById('texto').value;
    let busTexto = document.getElementById('buscarTexto').value;
    if (!verTexto) {
        document.getElementById("totalText").innerText = ("Debe ingresar una palabra");
    } else {
        if(verTexto.search(busTexto)){
            let finalText = document.getElementById('totalText').value;
            document.getElementById("totalText").innerText = (verTexto);
        }
        
    }
});