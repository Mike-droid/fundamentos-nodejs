# Curso de Fundamentos de Node.js

## Conocer los conceptos básicos de NodeJS

### EventLoop: asíncronia por diseño

El Event Loop es un proceso con un bucle que gestiona, de forma asíncrona, todos los eventos de tu aplicación.

### Monohilo: implicaciones en diseño y seguridad

La desventaja de que Node sea monohilo es que, si encuentra un error, **se detiene todo el proceso**.

### Configurar las variables de entorno en Node.js

```javascript
let nombre = process.env.NOMBRE ?? 'Miguel'
let web = process.env.WEB ?? 'Google'

console.log(`hola ${nombre}`);
console.log(`Mi web es ${web}`);

```

Podemos llamar las variables de entorno desde la terminal unix:

```bash
$ NOMBRE='Carlos' WEB='Youtube' node conceptos/entorno.js
hola Carlos
Mi web es Youtube
```

### Herramientas para ser más felices: Nodemon y PM2

- [nodemon.io](https://nodemon.io/) -> para desarrollo
- [pm2](https://pm2.keymetrics.io/) -> para producción
