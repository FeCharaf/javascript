function qualAHora() {
    var cor = document.body.style
    var hora = new Date().getHours()
    var msg = document.getElementById('msg')
    
    msg.innerHTML = `A hora atual é ${hora}`

    if (hora >= 12 && hora <= 18) {
        cor.backgroundColor = "#b9846f";
    }


}

qualAHora()