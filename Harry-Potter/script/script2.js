$("document").ready(function(){
    $(".pelicula").hide().fadeOut(4000).fadeIn(5000);
    // $(".pelicula").show(5000);
    // $(".pelicula").slideUp(3000);
    // $(".pelicula").slideDown(3000);
    // $(".pelicula").fadeOut(3000);
    // $(".pelicula").fadeIn(5000);
    // se puede encadenar en una misma linea como en la linea 2
})

//-------------------------PREGUNTAS-----------------------------

$("document").ready(function(){
    $("#comenzar").click(function(){
        $(this).hide();
        $(".score").css("display","flex");
        $(".solo-preguntas").css("display","flex");
        $(".siguiente").css("display","block");    
        plusSlides(0)
    })
    var slideIndex=1;
    var slides=$(".pregunta");
    function plusSlides(n){
        showSlides(slideIndex +=n);
    }
    function showSlides(n){
        var i;
        if (n>slides.length){
            slideIndex=1;
        }
        if(n<1){
            slideIndex=slides.length;
        }
        for (i=0; i<slides.length;i++){
            slides[i].style.display="none";
        }
        slides[slideIndex-1].style.display="block";
    }
    var contadorSiguiente=0;{
        $(".siguiente").on("click",function(){
            if(contadorSiguiente<slides.length-1){
                plusSlides(1);
                contadorSiguiente++;
            }
        })
    }
});

