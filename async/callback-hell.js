// a

function hola(nombre, callback) {
    setTimeout(() => {
        console.log('Hola, '+nombre);
        callback(nombre);
    })
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla bla...');
        callbackHablar();
    })
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios', nombre);
        otroCallback();
    })
}

function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
};

console.log('Iniciando proceso...');
hola('Joel', function(nombre) {
    conversacion(nombre, 30, function() {
        console.log('Proceso terminado')
    });
})