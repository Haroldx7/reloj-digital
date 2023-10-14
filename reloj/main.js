function calcular(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minutos = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    
    let pantalla = hora + ":" + minutos +":"+segundos;



    let reloj = document.querySelector('.reloj');
    reloj.innerHTML = pantalla;
}

setInterval(calcular, 1000)

