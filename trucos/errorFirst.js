const asincrona = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z
      callback(null, a)
    }
    catch(e) {
      callback(e)
    }
  }, 1000)
}

asincrona((error, dato) => {
  if (error) {
    console.error(error.message)
    throw error
  }
  console.log(dato)
})
