const { exec, spawn } = require('child_process')

//* dir para windows y 'ls -la' para unix
/* exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(error)
    return false
  }

  console.log(stdout)
})
 */

let proceso = spawn('ls', ['-la']);

/* console.log(proceso)

proceso.stdout.on('data', (dato) => {
  console.log(dato.toString())
})
 */

proceso.on('exit', () => {
  console.log('el proceso terminó')
})
