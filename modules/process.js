process.on('beforeExit', () => {
  console.log('el proceso va a terminar')
})

process.on('exit', () => {
  console.log('proceso terminado')
  setTimeout(() => {
    console.log('no llegara')
  }, 0)
})

setTimeout(() => {
  console.log('sí llegara')
}, 100)

process.on('uncaughtException', (error, origin) => {
    console.error(error)
    console.log("🚀 ~ file: process.js:12 ~ process.on ~ error:", error)
})

process.on('unhandleRejection', (error, origin) => {
    console.error(error)
    console.log("🚀 ~ file: process.js:17 ~ process.on ~ error:", error)
})

/* noExiste()

console.log('¿llegara?') //! NO
 */
