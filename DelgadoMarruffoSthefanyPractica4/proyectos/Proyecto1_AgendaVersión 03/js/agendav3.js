function guardarDato() {
    //capturando variables
    const nombre=document.getElementById("nombre").value;
    const movil=document.getElementById("movil").value;
    const email=document.getElementById("email").value;
    const direccion=document.getElementById("direccion").value;


    const datos = {
        'movil': movil,
        'email': email,
        'direccion': direccion
    };

    //almacenando los datos
    localStorage.setItem(nombre, JSON.stringify(datos));

    //borrando los datos
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    document.getElementById("direccion").value="";


    //actualizando la lista
    actualizarDatos();

}

function recuperarDato(){
    
    var nombre = prompt("Ingresa el nombre para recuperar los datos","");
    //var nombre=document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    //document.getElementById("nombre").value=localStorage.getItem(nombre);

    var datosJson = JSON.parse(localStorage.getItem(nombre));
    document.getElementById("nombre").value=nombre;
    document.getElementById("movil").value=datosJson.movil;
    document.getElementById("email").value=datosJson.email;
    document.getElementById("direccion").value=datosJson.direccion;

}
function eliminarDato() {
    var nombre=document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();

}

function eliminarTodo() {
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro="";
    if (localStorage.length==0) {
        registro += '<li>Vacío</li>';
        
    } else {
        for(var i = 0; i<= localStorage.length-1; i++){
            var key = localStorage.key(i);
            var datosJson=JSON.parse(localStorage.getItem(key));
            registro+='<div class="tabla">'+ '<div class="nom">'+ key +'</div>'+
            '<div class="nom">'+ datosJson.movil + '</div>'+
            '<div class="nom">'+ datosJson.email + '</div>'+
            '<div class="nom">'+ datosJson.direccion + '</div>'+
            '</div><br>';
            console.log(datosJson.movil);
        }
    }
    document.getElementById('contactos').innerHTML=registro;
}