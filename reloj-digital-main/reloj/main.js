function calcular(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    
    let pantalla = hora + ":" + minutos +":"+segundos;

    if(hora > 12){
        let nuevaHora = hora % 12;
        pantalla = nuevaHora + ":" + minutos +":"+segundos+"PM";
    }else{
        pantalla = hora + ":" + minutos +":"+segundos+"AM";
    }


    let reloj = document.querySelector('.reloj');
    reloj.innerHTML = pantalla;
}

setInterval(calcular, 1000)

