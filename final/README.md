# Ejercicio final
## Creación del proyecto express
Instalamos [express-generator](http://expressjs.com/en/starter/generator.html) `npm i express-generator -g`

Una vez instalado lo empleamos para crear nuestro proyecto base:
`express --pug -v pug expres-movies`

Este generador de proyectos ya nos establecerá una estructura básica.

Además de la estructura también nos incluirá algunas de las las dependencias básicas:
1. El propio `express`.
2. `body-parser` _middleware_ que analizará los cuerpos de las _requests_ y nos hará accesibles sus contenidos mediante la propiedad `req.body`.
3. `morgan` _logger_ que nos informa de los eventos de nuestra aplicación.
4. `pug` motor de generación de vistas.

Además de estas también necesitaremos incluir: 
* `couchbase` conector para acceder a _buckets_ de Couchbase.
* `ottoman` ODM[^1] que funciona con Couchbase.

[^1]: Object Document Mapper

Para ello ejecutaremos la instrucción `nmp i couchbase ottoman --save`

## Creación del proyecto angular
Instalamos [angular-cli](https://cli.angular.io/) `npm i @angular/cli ´g`.
Una vez instalado lo utilizamos para generar nuestro proyecto Angular:
`ng new angular-movies`.

Puesto que se recomienda usar Bootstrap como _frontend_ decidimos que "de mojados ..." e instalamos bootstrap-material-design. Para ello:
1. Instalamos `bootstrap`, `jquery`, `arrive`[^2], y `bootstra-material-design`. Para ello usaremos el comando `npm i jquery@"<=3" arrive bootstrap bootsrap-material-design --save`.
2. Una vez instalados los paquetes hemos de hacerlos accesibles a nuestra aplicación. Para ello editaremos los archivos `.angular-cli.json` y `./src/styles.css` de nuestro proyecto de acuerdo a las siguientes indicaciónes.

En `.angular-cli.json` añadiremos las líneas:
```json
"scripts": [
  "../node_modules/jquery/dist/jquery.min.js",
  "../node_modules/bootstrap/dist/js/bootstrap.min.js",
  "../node_modules/bootstrap-material-design/dist/js/material.min.js",
  "../node_modules/bootstrap-material-design/dist/js/ripples.min.js",
  "../node_modules/arrive/minified/arrive.min.js",
  "scripts/init.js"
],
```

En `./src/styles.css` añadiremos a su vez:
```css
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css";
@import "../node_modules/bootstrap-material-design/dist/css/ripples.min.css"
```

Una vez completados los pasos anteriores lanzaremos nuestra aplicación con el comando `ng serve`.

[^2]: Para la decoración de objetos que _aparecen_ en el DOM.