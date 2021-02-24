let num = window.document.querySelector('input#numtxt')
let lista = window.document.querySelector('select#adcnum')
let res = window.document.querySelector('div#res')
let valores = []

function SeNumero(Nu) {
    if (Number(Nu) >= 1 && Number(Nu) <= 100 ) {
        return true
    } else {
        return false
    }
}

function InLista(Nu, list) {
    if (list.indexOf(Number(Nu)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (SeNumero(num.value) && !InLista(num.value, valores)) {
       
    } else {
        window.alert('Valor inváldo ou já encontrado na lista.')
    }
}