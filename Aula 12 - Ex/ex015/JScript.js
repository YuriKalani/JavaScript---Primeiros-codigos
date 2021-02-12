function Verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente!')
    } else {
        var fSex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50 ) {
                //Adulto
            } else {
                //Idoso
            }
        } else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50 ) {
                //Adulto
            } else {
                //Idoso
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
