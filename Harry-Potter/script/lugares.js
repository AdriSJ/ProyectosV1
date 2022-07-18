$("document").ready(function(){
    $(".lugares img").mouseenter(function(){
        $(this).css("opacity", 1);
        var nombre= $(this).next(".sitio");
        nombre.css("display","inherit")
    })
    $(".lugares img").mouseleave(function(){
        $(this).css("opacity", 0.5);
        var nombre= $(this).next(".sitio");
        nombre.css("display","none")    
    })
    $(".colage-img").click(function(e){ //le asignamos un parametro
        var img=e.target.src;          //aqui leo la ruta del elemento
        var modal='<div class="modal" id="modal"><img src="'+img+'" alt=""><div class="modal-boton" id="modal-boton">X</div></div>';
        $("body").append(modal);           // inserta un contenido en la etiqueta o selector que se le indique
        $(".modal-boton").click(function(){
            $("#modal").remove();
        })
    })
})