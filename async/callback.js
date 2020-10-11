function hola(nombre, callback) {
    setTimeout(() => {
        console.log('Hola, '+nombre);
        callback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    }, 5000)
}

console.log('Iniciando proceso...')
hola('Joel', () => {
    adios('Joel', () => {
        console.log('NOOOOOOOOO TE VAYAS PANA')
    })
});  