//nombre es del name del input
function guardarDatos() {
   localStorage.nombre=document.getElementById("nombre").value; 
   localStorage.movil=document.getElementById("numCelular").value; 
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.numCelular != undefined)) {
        document.getElementById("datos").innerHTML="Nombre: "+ localStorage.nombre + "<br> Num. Celular: " + localStorage.numCelular;
    } else {
        document.getElementById("datos").innerHTML= "No has ingresado datos en la agenda";
    }
}