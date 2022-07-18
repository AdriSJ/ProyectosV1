//   function cookies(){
//       alert("UTILIZAMOS COOKIES: Podemos colocarlos para el análisis de los datos de nuestros visitantes, para mejorar nuestro sitio web, mostrar contenido personalizado y brindarle una excelente experiencia en el sitio web. Para obtener más información sobre las cookies que utilizamos, vaya a la sección de Política de Cookies, en el pie de página")
//   }
  function fecha(){
    d=new Date();
        switch (d.getDay()){
            case 0:day="Domingo";break;
            case 1:day="Lunes";break;
            case 2:day="Martes";break;
            case 3:day="Miercoles";break;
            case 4:day="Jueves";break;
            case 5:day="Viernes";break;
            case 6:day="Sábado";
        }
        switch (d.getMonth()){
            case 0:mes="Enero";break;
            case 1:mes="Febrero";break;
            case 2:mes="Marzo";break;
            case 3:mes="Abril";break;
            case 4:mes="Mayo";break;
            case 5:mes="Junio";break;
            case 6:mes="Julio";break;
            case 7:mes="Agosto";break;
            case 8:mes="Septiembre";break;
            case 9:mes="Octubre";break;
            case 10:mes="Noviembre";break;
            case 11:mes="Diciembre";
            
        }
        document.getElementById("fecha").innerHTML="Hoy es "+day+" "+d.getDate()+" de "+mes+" de "+d.getFullYear();
}
function reloj(){
    a=new Date();
    hora=a.getHours();
    minuto=a.getMinutes();
    segundo=a.getSeconds();
    if(hora<10){
        hora="0"+hora;
    }
    if(minuto<10){
        minuto="0"+minuto;
    }
    if(segundo<10){
        segundo="0"+segundo;
    }
    imprimir=hora+" : "+minuto+" : "+segundo;
    document.getElementById("reloj").innerHTML=imprimir;

    setTimeout("reloj()",1000)
}
function cambiarImagen1a(){
    img1.style.width="330px";
    img1.style.boxShadow="5px 10px 18px #888888";
    img1.style.opacity="1";
}
function cambiarImagen1b(){
    img1.style.width="300px";
    img1.style.boxShadow="none";
    img1.style.opacity="0.4";
}
function cambiarImagen2a(){
    img2.style.width="330px";
    img2.style.boxShadow="5px 10px 18px #888888";
    img2.style.opacity="1";
}
function cambiarImagen2b(){
    img2.style.width="300px";
    img2.style.boxShadow="none";
    img2.style.opacity="0.4";
}
function cambiarImagen3a(){
    img3.style.width="330px";
    img3.style.boxShadow="5px 10px 18px #888888";
    img3.style.opacity="1";
}
function cambiarImagen3b(){
    img3.style.width="300px";
    img3.style.boxShadow="none";
    img3.style.opacity="0.4";
}
function tabla(){
    tab=new Array();
    tab=[["Electrodomésticos","Potencia en KW"],["Nevera","entre 0,250-0,350 kW"],["Vitrocerámica","entre 0,900-2,000 kW"],["Microondas","entre 0,900-1,500 kW"],["Horno","entre 1,200-2,200 kW"],["Lavavajillas","entre 1,500-2,200 kW"],["Lavadora","entre 1,500-2,200 kW"],["Televisión","entre 0,150-0,400 kW"],["Aire acondicionado","entre 0,900-2,000 kW"],["Calefacción","entre 1,000-2,500 kW"]];
    var x,y;
        document.write("<table>");
        for (x=0;x<tab.length;x++){
            document.write("<tr>");
                for (y=0;y<tab[x].length;y++){
                    document.write("<td>");
                        document.write(tab[x][y]);
                    document.write("</td>");    
                }
            document.write("</tr>");    
        }
        document.write("</table>");
}
function comprobarNombre(nombre){
     a=document.getElementById("nombre").value;
     if(a==""){
         alert("Debe introducir su nombre.")
         return false
     }else{
        alert("Gracias por enviar su mensaje "+a);
    }
     return true
}
function comprobarCorreo(correo){
    var posArroba,posPunto;
    posArroba=correo.indexOf("@");
        if(posArroba==-1){
            return false;
        }
   posPunto=correo.lastIndexOf(".");
        if(posPunto==-1||posPunto<posArroba){
            return false
        }
        return true;
    }
function comprobarFormulario(){
    var telefono,r,nombre;
    texto=document.getElementById("correo").value;
    telefono=document.getElementById("telefono").value;
    if(comprobarCorreo(texto)==false){
        alert("Correo electrónico incorrecto.");
        return false;
    }
    r=telefono.length;
    if (isNaN(telefono) || r!=9){
        alert("Tú nº de telefono solo puede contener digitos de 0-9");
        return false;
    }
    if (comprobarNombre(nombre)){
        return true;
    }
    
}
function habilitar(){
    var elem=document.getElementById("boton");//ver el elemento de la casilla
    var marcada=document.getElementById("casilla").checked;
    if(marcada){
        elem.removeAttribute("disabled");
    }else{
        elem.setAttribute("disabled","disabled");
    }
}

window.onload=function(){
    // cookies();
    reloj();
    fecha();
    img1.addEventListener("mouseenter",cambiarImagen1a);
    img1.addEventListener("mouseleave",cambiarImagen1b);
    img2.addEventListener("mouseenter",cambiarImagen2a);
    img2.addEventListener("mouseleave",cambiarImagen2b);
    img3.addEventListener("mouseenter",cambiarImagen3a);
    img3.addEventListener("mouseleave",cambiarImagen3b);
}