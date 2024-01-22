function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("minute");
    const secondHand = document.getElementById("second");

// Calcular os ângulos para as mãos do relógio
    const hourAngle = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
    const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondAngle = (360 / 60) * seconds;

    // Aplicar as transformações CSS para rotacionar as mãos do relógio
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}


// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio quando a página é carregada
updateClock();