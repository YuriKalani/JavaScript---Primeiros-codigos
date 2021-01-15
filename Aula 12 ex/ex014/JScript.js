function carregar() {
    var msg = window.document.getElementById('msg')
    var imag = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12 ) {
        //Bom dia
        imag.src = "fotomanha.png"
        window.document.body.style.background = "#ced8d5"
    } else if ( hora >= 12 && hora <= 18) {
        //Boa tarde
        imag.src = "fototarde.png"
        window.document.body.style.background = "#d26c35"
    } else {
        //Boa noite
        imag.src = "fotonoite.png"
        window.document.body.style.background = "#16282f"
    }

}