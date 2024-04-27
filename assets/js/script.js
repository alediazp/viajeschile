

/*Requerimiento smooth scrool al hacer click sobre enlaces de navbar*/

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

//Requerimiento Tooltip.
$(function () {
    $("#enviarFormulario").tooltip();

});


/*Requerimiento Generar alert al hacer click sobre boton Enviar en sección 
contacto.*/
$(document).ready(function () {
    $("#enviarFormulario").click(function () {
        alert("La información ha sido enviada correctamente...");
    });
});

