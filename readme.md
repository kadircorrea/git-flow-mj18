# GIT (Sistema de Control de Versiones)

Esto es una guia teorico/practica para los alumnos de __GIT Desarrollo Colaborativo__ que cursan los dias _Jueves de 18hs a 20hs_, cuya finalidad el refozar los conceptos y temas trabajados en clase.

## Configuracion Inicial

Cuando trabajamos con GIT debemos inicializar un proyecto en la carpeta donde querramos llevar un control de los cambios. Para ello es necesario establecer un nombre de usuario y correo con el que se pueda identificar a la persona que realizo dichas modificaciones.

La configuracion puede definirse en 3 niveles (local, global, system) segun como gestionemos los diferentes proyecto. Algunos de los comandos que podemos utilizar para definir o verificar dicha configuracion son:

* __git init:__ inicializa un repositorio en la carpeta actual
* __git config user.name `name`:__ define el nombre de usuario
* __git config user.email `email`:__ define un correo de contacto
* __git config --list:__ muestra la configuracion general

## Gestion de Repositorios

Si necesitamos agregar una direccion de un servidor de GIT, para subir nuestro historial de confirmaciones, o simplemente sincronizar los cambios con dicho remoto, podemos utilizar algunos de los siguientes comandos

* __git remote add `alias` `url`:__ agregar una direccion remota al repositorio local
* __git fetch `remote`:__ descargar el historial de confirmaciones del repositorio remoto
* __git pull `remote` `branch`:__ descarga e integra los cambios del respositorio remoto al working directory
* __git push `remote` `branch`:__ envia el historial de confirmaciones al repositorio remoto

## Apuntadores de GIT

Son referencias que permiten al usuario navegar dentro de historial de confirmaciones, ademas que facilitan la identificacion de ciertos puntos dentro del registro de cambios. Entre los punteros que exiten en git, se encuentran los siguientes:

* __HEAD:__ Apuntador Movil que indica donde nos encontramos dentro de historial de confirmaciones, ademas sirve como referencia para desplazarse dentro del mismo.
* __BRANCH:__ Apuntador Dinamico que siempre se corresponde con el ultimo commit de la historia actual, se utiliza como referencia cuando necesitamos ir hacia adelante.
* __TAG:__ Apuntador Estatico que se corresponde con un commit en concreto y se utiliza para el versionado del proyecto y facilitar la navegacion a ciertos puntos de la historia.
* __STASH:__ Apuntador de la Zona Temporal de cambios, se utiliza cuando debemos cambiar entre ramas, pero tenemos trabajo en progreso y no amerita un commmit, genera una referencia.

---

## Contacto

Para mas informacion sobre este y otros cursos pueden visitar el sitio web [EducacionIT](https://educacionit.com.ar), tambien pueden acceder al material y las clases grabadas desde la plataforma [Alumni](https://alumni.education). 

Para cualquier consulta que necesite realizar, sobre el contenido, pueden enviar un correo electronico a [CristianDRacedo@hotmail.com](mailto:cristiandracedo@hotmail.com)