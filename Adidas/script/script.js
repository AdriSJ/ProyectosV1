$("document").ready(function(){
    $(".zapa-img").mouseenter(function(){
        $(this).css("opacity", 1);
    })
    $(".zapa-img").mouseleave(function(){
        $(this).css("opacity", 0.5);    
    })
    
    $(".pregun").click(function(){
        var contenido=$(this).next(".respuesta")
        if(contenido.css("display")=="none"){ //verificamos que no este abierto el contenido
            contenido.slideDown(250); //mostramos el contenido utilizando el metodo slideDown indicando los milisegundos.          
            $(this).addClass("abierto");
        }else{
            contenido.slideUp(250);
            // $(".indicador").html("+")     
            $(this).removeClass("abierto");
     
        }
    })

    $(".imagen").hide().fadeOut(4000).fadeIn(5000);

    $(".cambio-color").mouseenter(function(){
        $(this).css("color","darkred");
        $(this).css("font-size","1.3em");
    })
})