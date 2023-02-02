# GIT (Sistema de Control de Versiones)

Esto es una guia teorico/practica para los alumnos de __GIT Desarrollo Colaborativo__ que cursan los dias _Jueves de 18hs a 20hs_, cuya finalidad el refozar los conceptos y temas trabajados en clase.

## Configuracion Inicial

Cuando trabajamos con GIT debemos inicializar un proyecto en la carpeta donde querramos llevar un control de los cambios. Para ello es necesario establecer un nombre de usuario y correo con el que se pueda identificar a la persona que realizo dichas modificaciones.

La configuracion puede definirse en 3 niveles (local, global, system) segun como gestionemos los diferentes proyecto. Algunos de los comandos que podemos utilizar para definir o verificar dicha configuracion son:

* __git init:__ inicializa un repositorio en la carpeta actual
* __git config user.name `name`:__ define el nombre de usuario
* __git config user.email `email`:__ define un correo de contacto
* __git config --list:__ muestra la configuracion general