const { createServer } = require('http')

const port = 3000

const router = (request, response) => {
  console.log('nueva petición')
  console.log(request.url)

  switch (request.url) {
    case '/':
      response.end('<h1>Hola !</h1>')
      break;
    default:
      response.write('Error 404, no sé lo que quieres')
      response.end()
      break;
  }
}

const server = createServer(router)

server.listen(port, (error) => {
  if (error) {
    console.info('No se pudo conectar con el servidor')
    console.error(error.message)
  }

  console.info(`Listening on http://localhost:${port}`)
})
