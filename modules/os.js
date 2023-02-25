const os = require('os');

console.log(os.arch())
console.log(os.platform())

console.table(os.cpus())

//console.log(os.constants)

const SIZE = 1024
const kb = (bytes) => bytes / SIZE
const mb = (bytes) => kb(bytes / SIZE)
const gb = (bytes) => mb((bytes / SIZE))

console.log(`memoria libre: ${os.freemem()}`)
console.log(`memoria libre: ${kb(os.freemem())} kb`)
console.log(`memoria libre: ${mb(os.freemem())} mb`)
console.log(`memoria libre: ${gb(os.freemem())} gb`)

console.log(`memoria total: ${gb(os.totalmem())} gb`)

console.log(os.homedir())
console.log(os.tmpdir())
