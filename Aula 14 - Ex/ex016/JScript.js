function Contar() {
    let iniciar = window.document.getElementById('startxt')
    let final = window.document.getElementById('endtxt')
    let passo = window.document.getElementById('spacetxt')
    let res = window.document.querySelector('div#resp')
    if (iniciar.value.length == 0 || final.value.length == 0 || passo.value.length == 0 ) {
    //    window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(iniciar.value)
        let fim = Number(final.value)
        let pass = Number(passo.value)
        if (pass <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            pass = 1
        }
        if (ini < fim ) {
            // Contagem Crescente
            for (let cont = ini; cont <= fim; cont += pass) {
                res.innerHTML += `\u{1F449} ${cont} `
            }
        } else {
            // Contagem Regressiva
            for (let cont = ini; cont >= fim; cont -= pass) {
                res.innerHTML += `\u{1F449} ${cont} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}