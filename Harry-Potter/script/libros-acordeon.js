$("document").ready(function(){
    $(".titulo-libro").click(function(){
        var contenido=$(this).next(".descripcion-libro")
        if(contenido.css("display")=="none"){ //verificamos que no este abierto el contenido
            contenido.slideDown(250); //mostramos el contenido utilizando el metodo slideDown indicando los milisegundos. 
            // $(".indicador").html("-")          
            $(this).addClass("abierto");
        }else{
            contenido.slideUp(250);
            // $(".indicador").html("+")     
            $(this).removeClass("abierto");
     
        }
    })
})
