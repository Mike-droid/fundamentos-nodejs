const hello = (name, myCallback) => {
  setTimeout(() => {
    console.log(`hello ${name}`)
    myCallback(name)
  }, 1000)
}

const speak = (callbackSpeak) => {
  setTimeout(() => {
    console.log('bla bla bla')
    callbackSpeak()
  }, 1000)
}

const goodbye = (name, anotherCallback) => {
  setTimeout(() => {
    console.log(`goodbye ${name}`)
    anotherCallback()
  }, 1000)
}

const converstaion = (name, times, callback) => {
  if (times > 0) {
    speak(() => {
      converstaion(name, --times, callback)
    })
  } else {
    goodbye(name, callback)
  }
}

console.log('start converstaion...')
hello('mike', (name)=> {
  converstaion(name, 3, () => {
    console.log('ending')
  })
})

//! callback hell
/* console.log('starting process')
hello('Miguel', (name) => {
  speak(() => {
    speak(() => {
      speak(() => {
        goodbye(name, () => {
          console.log('finishing process')
        })
      })
    })
  })
})
 */

