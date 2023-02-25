const fs = require('fs');

const leer = (path, cb) => {
  fs.readFile(path, (error, data) => {
    cb(data.toString())
  })
}

const escribir = (ruta, contenido) => {
  fs.writeFile(ruta, contenido, (error) => {
    error ?
      console.error('No he podido escribirlo', error) :
      console.log('Se ha escrito correctamente')
  })
}

const borrar = (ruta, cb) => {
  fs.unlink(ruta, cb)
}

//leer(`${__dirname}/archivo.txt`, console.log);

//let contenido = 'Soy un archivo nuevo'

//escribir(__dirname + '/archivo1.txt', contenido)

//borrar(__dirname + '/archivo1.txt', ()=>{});
