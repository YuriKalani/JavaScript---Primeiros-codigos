var idade = 17
console.log(`Você têm ${idade}`)
if (idade < 16 ) {
    console.log('Menor de idade. NÃO VOTA.')
} else if (idade < 18 || idade > 65 ) {
    console.log('VOTO OPCIONAL.')
} else {
    console.log('Adulto. VOTO OBRIGATÓRIO!!')
}