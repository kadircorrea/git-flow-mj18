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
const toggle = (object) => {
    const { btn, target, className, classes } = object;
    target.classList.toggle(className) ?
    btn.classList.replace(classes[0], classes[1]) :
    btn.classList.replace(classes[1], classes[0])
}
//#Funciones
//#Eventos
    mapButton.addEventListener('click', toggle({
        btn: mapButton,
        target: mapFrame,
        className,
        classes: ['icon-plus', 'icon-less']
    } ) );
//#Eventos