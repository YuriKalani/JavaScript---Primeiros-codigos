function Contar() {
    var iniciar = window.document.getElementById('startxt')
    var final = window.document.getElementById('endtxt')
    var pass = window.document.getElementById('spacetxt')
    var res = window.document.querySelector('div#resp')
    if (Number(pass.value) == 0 ) {
        window.alert(`Passo Inválido! Considerando PASSO ${Number(iniciar.value)}!!`)
        var cont = Number(iniciar.value)
        for ((Number(iniciar.value); cont <= Number(final.value); cont=cont+Number(iniciar.value)) {
            res.innerHTML = `Nº ${cont}`
        }
    }
}