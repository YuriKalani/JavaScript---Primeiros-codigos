function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var bomdia = window.document.getElementById('bomdia')
var data = new Date ()
var hora = data.getHours()
//var hora = 1
msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 5) {
    //Boa Madrugada!
    img.src = 'fotonoite.png'
    window.document.body.style.background = '#263840'
    bomdia.innerHTML = 'BOA MADRUGADA'
} else if (hora < 12) {
    //Bom dia!!
    img.src = 'fotomanha.png'
    window.document.body.style.background = '#47506c'
    bomdia.innerHTML = 'BOM DIA'
} else if (hora < 19) {
    //Boa Tarde!!
    img.src = 'fototarde.png'
    window.document.body.style.background = '#fd940f'
    bomdia.innerHTML = 'BOA TARDE'
} else { 
    //Boa noite!!
    img.src ='fotonoite.png'
    window.document.body.style.background = '#192a33'
    bomdia.innerHTML = 'BOA NOITE'
}
}
