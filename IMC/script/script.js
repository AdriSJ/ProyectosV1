
function cal(){
    var altura=document.getElementById("altura").value;
    var cms=parseInt(altura);
        if (isNaN(cms)||cms>250||cms<100){
            error.innerHTML="ERROR: Usted ha introducido mal la altura"
        }else{
    var peso=document.getElementById("peso").value;
    var kg=parseInt(peso);
    }
        if(isNaN(kg)||kg>200||kg<=20){
            error.innerHTML="ERROR: Usted ha introducido mal el peso"
    }else{
        var metros=cms/100;    
        var ims=kg/(metros*metros);
        resul=ims.toFixed(2);
            if(resul==0||resul<=18.5){
                resultado.innerHTML="Usted tiene un IMC de  "+"<span>"+resul+"</span>"+"  por lo tanto está en: <span>BAJO PESO</span>";
    }
            if(resul>=18.6&&resul<=24.9){
                resultado.innerHTML="Usted tiene un IMC de  "+"<span>"+resul+"</span>"+"  por lo tanto está en:   <span>PESO NORMAL</span>";
    }
             if(resul>=25&&resul<=29.9){
                resultado.innerHTML="Usted tiene un IMC de  "+"<span>"+resul+"</span>"+"  por lo tanto está en:  <span>SOBREPESO</span>";
    }
            if(resul>=30){
                resultado.innerHTML="Usted tiene un IMC de  "+"<span>"+resul+"</span>"+"  por lo tanto está:  <span>OBESO</span>";
    }
    }
}

