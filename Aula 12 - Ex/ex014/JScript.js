function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 5) {
    //Boa Madrugada!
    img.src = 'fotonoite.png'
} else if (hora < 12) {
    //Bom dia!!
    img.src = 'fotomanha.png'
} else if (hora < 19) {
    //Boa Tarde!!
    img.src = 'fototarde.png'
} else { 
    //Boa noite!!
    img.src ='fotonoite.png'
}
}
