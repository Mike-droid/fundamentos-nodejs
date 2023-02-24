const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hello ${name}`)
      resolve(name)
      //reject('error!')
    }, 1000)
  })
}

const speak = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bla bla bla')
      resolve(name)
    }, 1000)
  })
}

const goodbye = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`goodbye ${name}`)
      resolve(name)
    }, 1000)
  })
}

const main =  async () => {
  let nombre = await hello('Miguel');
  await speak()
  await speak()
  await speak()
  await speak()
  await goodbye(nombre)
}

console.log('¡empezamos el proceso!')
main()
console.log('¡termina el proceso!')
