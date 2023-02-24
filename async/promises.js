const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`hello ${name}`)
      //resolve(name)
      reject('error!')
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

console.log('process started...')
hello('Mike')
  .then(speak)
  .then(goodbye)
  .then(() => {
    console.log('process finished...')
  })
  .catch(error => {
    console.error(`there has been an error: ${error}`)
  })
