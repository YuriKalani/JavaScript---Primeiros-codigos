function carregar() {
    var msg = window.document.getElementById('msg')
    var imag = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 18
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 e && hora < 12 ) {
        //Bom dia
        imag.src = "fotomanha.png"
    } else if ( hora >= 12 && hora < 18) {
        //Boa tarde
        imag.src = "fototarde.png"
    } else {
        //Boa noite
        imag.src = "fotonoite.png"
    }

}