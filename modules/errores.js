const otraFuncion = () => {
  seRompe()
}

const seRompe = () => {
  return 3 + z
}

const seRompeAsincrona = (cb) => {
  setTimeout(() => {
    try {
      return 3 + z
    } catch (error) {
      console.log("๐ ~ file: errores.js:14 ~ setTimeout ~ error:", error.message)
      cb()
    }
  })
}

try {
  seRompeAsincrona(() => {
    console.error('hay error')
  })
} catch (error) {
  console.error("๐ ~ file: errores.js:12 ~ error:", error.message)
}

console.log('aรบn funciona!')
