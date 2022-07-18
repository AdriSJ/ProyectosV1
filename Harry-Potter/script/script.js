
//Declaración constante
const slider=document.querySelector("#slider"); // es un valor constante que acumula el div del slider
const btnDer=document.querySelector("#boton-derecho");
const btnIzq=document.querySelector("#boton-izquierdo");

//Declaración de variables
var sliderSection=document.querySelectorAll(".slider-seccion"); //acumula todo los selectores de la clase .slider-seccion
var sliderSelectionLast=sliderSection[sliderSection.length-1]; //aqui seleccionamos el ultimo elemento del slider

//Aplicar el metodo insertAdjacentElement para colocar el último elemento en primera posición.
slider.insertAdjacentElement("afterbegin",sliderSelectionLast)

function siguiente(){
    var sliderSelectionFirst=document.querySelectorAll(".slider-seccion")[0]; //solo cogemos el primer slider
    slider.style.marginLeft="-200%"; //avanza uno hacia la derecha
    slider.style.transition="all 0.5s";//definimos el tiempo para avanzar de un slider a otro.
    setTimeout(function() { //funcion anonima que permite que el margen vuelva al -100%
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sliderSelectionFirst);
        slider.style.marginLeft="-100%";
    },500)//le indicamos el mismo tiempo que tiene la transición
}
btnDer.addEventListener("click",function() {
    siguiente();
})

function anterior(){
    var sliderSection=document.querySelectorAll(".slider-seccion");
    var sliderSelectionLast=sliderSection[sliderSection.length-1]; 
    slider.style.marginLeft="0%"; 
    slider.style.transition="all 0.5s";
    setTimeout(function() { 
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",sliderSelectionLast);
        slider.style.marginLeft="-100%";
    },500)
}
btnIzq.addEventListener("click",function() {
    anterior();
})

setInterval(function(){
    siguiente();
}, 3000);