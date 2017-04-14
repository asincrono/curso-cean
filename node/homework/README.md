# Autenticación / Autorización
Ejercicios del curso de CEAN que consisten en la creación de un sitio web con cuatro páginas y servicio de login mediante [**Passport.js**](http://passportjs.org).

## Iteración 1
* Configura un sitio web con __Nodejs__ y __Express__.
* Gestiona la petición de '/' con el verbo __GET__.
+++
## Iteración 2
Creación de cuatro páginas HTML dispuestas como **recursos estáticos** accesibles desde el directorio `public`:
* `index.html`.
* `login.html`.
* `profile.html`.
* `about.html`.

+++

## Iteración 3
Modifica `index.html` para que incluya una lista de enlaces al resto de las páginas:
* Login.
* Profile.
* Logout.

+++
## Iteración 4
Modifica `login.html` añadiendo un formulario para el alta de usuario que incluya:
* Un campo de texto para el nombre de usuario.
* Un campo de texto para la clave.
* Un botón para realizar la acción de login (tipo _submit_).

+++
## Iteración 5
Modifica `profile.html` incluyendo:
* Título de la página `Perfil de usuario`.
* Párrafo con la información del usuario.

## Iteración 6
Modificar `about.html` incluyendo un párrafo con la información de la empresa.

## Iteración 7
### Uso de [Passport.js](http://passportjs.org)
Activación del proceso de **autenticación** sobre el sitio web de modo que para poder entrar en la **sección de _profile_** el usuario tenga que estar autorizado (previo _login_). No será necesaria autenticación para acceder a la sección de la información de la empresa (página `about.html`).