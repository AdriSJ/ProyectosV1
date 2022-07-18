function suma(){
    var numm1=num1.value;
    var a=parseInt(numm1);
    var numm2=num2.value;
    var b=parseInt(numm2);
    var c=a+b
    resultado.value=c
}
function resta(){
    var numm1=num1.value;
    var a=parseInt(numm1);
    var numm2=num2.value;
    var b=parseInt(numm2);
    var c=a-b
    resultado.value=c
}
function multiplicacion(){
    var numm1=num1.value;
    var a=parseInt(numm1);
    var numm2=num2.value;
    var b=parseInt(numm2);
    var c=a*b
    resultado.value=c
}
function division(){
    var numm1=num1.value;
    var a=parseInt(numm1);
    var numm2=num2.value;
    var b=parseInt(numm2);
    var c=a/b
    resultado.value=c
}
function resto(){
    var numm1=num1.value;
    var a=parseInt(numm1);
    var numm2=num2.value;
    var b=parseInt(numm2);
    var c=a%b
    resultado.value=c
}
function limpiar(){
    num1.value="";
    num2.value="";
}
window.onload=function(){
    sum.addEventListener("click",suma);
    rest.addEventListener("click",resta);
    multi.addEventListener("click",multiplicacion);
    divi.addEventListener("click",division);
    res.addEventListener("click",resto);
    ce.addEventListener("click",limpiar);
}