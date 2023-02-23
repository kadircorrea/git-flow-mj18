//#Declaraciones
    const
        d = document,
        className = 'active',
        store = localStorage,
        session = sessionStorage,
    // Mapa de contacto
        mapButton = d.querySelector('#footer button.map'),
        mapFrame = d.querySelector('#footer iframe.map')
    ;
//#Declaraciones
//#Funciones

//#Funciones
//#Eventos
    mapButton.onclick = function(){
        mapFrame.classList.toggle(className);
    }
//#Eventos