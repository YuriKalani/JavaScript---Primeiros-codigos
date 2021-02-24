let num = [3, 5, 9, 8, 6, 2, 4]
num.sort()

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(num[7])


for (let pas = 0; pas < num.length; pas++) {
    console.log (`A posição ${pas} têm o valor ${num[pas]}`)
}
*/

for (let pos in num) {
    console.log(`A posição ${pos} têm o valor ${num[pos]}`)
}