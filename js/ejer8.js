document.getElementById('btn_idNum')
.addEventListener('click', function recorrido() {
    let numero = document.getElementById('verNum').value;
    if (!numero) {
        document.getElementById("verNumero").innerText = ("Debe rellenar los campos completos");
    } else {
        let numerosRec='';
        let recorrer= numero.split(',');
        for(let numero of recorrer){
        if(numero%2==0){
            numerosRec+= "<br> "+numero+" es número par";
        }else{
            numerosRec+="<br> "+ numero+" es impar";
        }}
        document.getElementById("verNumero").innerHTML = numerosRec;
    }
});

recorrido();