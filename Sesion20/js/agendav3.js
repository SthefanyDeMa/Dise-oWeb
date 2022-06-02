function guardarDato() {
    //capturando variables
    const nombre=document.getElementById("nombre").value;
    const movil=document.getElementById("movil").value;
    const email=document.getElementById("email").value;
    const direccion=document.getElementById("direccion").value;


    const datos={
        'movil': movil,
        'email': email,
        'direccion': direccion,
    }

    //almacenando los datos
    localStorage.setItem(nombre, JSON.stringify(datos));

    //borrando los datos
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    document.getElementById("direccion").value="";


    //actualizando la lista
    actualizarDatos;

}

function recuperarDato(){
    var nombre=document.getElementById("nombre").value;
    localStorage.setItem(nombre);
    document.getElementById("nombre").value=localStorage.getItem(nombre);
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
    if (localStorage.length===0) {
        registro +='<li>Vacío</li>';
        
    } else {
        for(var index=0;index<=localStorage.length-1;index++){
            var key=localStorage.key(index);
            var datos=JSON.parse(localStorage.getItem(key));
            registro+='<div class="conteinerTablaMostrar">'
            + '<div class="nom">'+ key+'</div>'
            + '<div class="nom">'+ datos.movil + '</div>'
            + '<div class="nom">'+ datos.email + '</div>'
            + '<div class="nom">'+ datos.direccion + '</div>'
            + '</div><br>';
        }
    }
    document.getElementById('datos').innerHTML=registro;
}