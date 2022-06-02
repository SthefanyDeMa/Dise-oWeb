$(document).ready(function () {
    $('input[name="probar"]').click(function () {

        // obtiene el elemento en el que se hace clic
        var $boton = $(this);
        // muestra el atributo value del elemento (con la etiqueta) y su color de fondo 
        alert("Texto: " + $boton.attr("value") + ". Color de fondo: " + $boton.css("background-color"));
    });
    $('input[name="propiedades"]').click(function () {

        // obtiene el botón con id propiedades
        var $boton = $(':button[id="propiedades"]')
        // modifica el estilo del botón
        $boton.css('background-color', 'transparent');
        $boton.css('font-weight', 'bold');
        $boton.css('border', 'none');
        $boton.css('text-decoration', 'underline');
        $boton.css('cursor', 'pointer');
    });
    $('input[name="cambiar"]').click(function () {

        // obtiene el elemento en el que se hace clic
        var $boton = $(this);
        /*
                                                // produce el mismo efecto que las dos líneas posteriores al comentario
                                                if ($boton.hasClass("azul")) {
                                                    $boton.removeClass("azul");
                                                    $boton.addClass("rojo");
                                                } else {
                                                    $boton.removeClass("rojo");
                                                    $boton.addClass("azul");
                                                }
        */
        // si el elemento tiene la clase azul, se la quita; si no la tiene se la adiciona
        $boton.toggleClass("azul");
        // si el elemento tiene la clase rojo, se la quita; si no la tiene se la adiciona
        $boton.toggleClass("rojo");
    });
    $("a.intercambiar").click(function (evento) {

        // obtiene todos los elementos a que sean de la clase intercambiar
        var $enlace = $("a.intercambiar");
        // obtiene los valores de sus atributos href y title
        var viejoHref = $enlace.attr("href");
        var viejoTitle = $enlace.attr("title");

        // intercambia los valores de los atributos href y title
        if ($enlace.html() == "Blog Calidad y mejora continua") {
            $enlace.attr("href", "http://www.google.com");
            $enlace.attr("title", "Buscador Google");
            $enlace.html("Google");
        } else {
            $enlace.attr("href", "https://edeliagarcia.com");
            $enlace.attr("title", "Blog Calidad y mejora continua");
            $enlace.html("Blog Calidad y mejora continua");
        }

        // muestra los valores anteriores y los actuales
        alert("Enlace anterior: " + viejoHref + ", título anterior: " + viejoTitle + "\n" +
            "Enlace nuevo: " + $enlace.attr("href") + ", título nuevo: " + $enlace.attr("title"));

        // evita que se continue propagando el evento, así no se navega al sitio indicado en href
        evento.preventDefault();
    });
});
