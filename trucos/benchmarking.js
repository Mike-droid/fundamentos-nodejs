/* console.time('bucle')
let suma = 0
for (let index = 0; index < 1000; index++) {
  suma += 1
}
console.timeEnd('bucle') */

const nombre = 'async'

console.time(nombre)
const asincrona = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('termina el proceso')
      resolve()
    })
  })
}
asincrona().then(() => {
  console.timeEnd(nombre)
})
