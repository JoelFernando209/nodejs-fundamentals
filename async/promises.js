function hola(nombre, callback) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola, '+nombre);
            resolve(nombre);
        }) 
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla bla...');
            callbackHablar(nombre);
        })
    })
}

function adios(nombre, otroCallback) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios', nombre);
            resolve(nombre);
        }, 1000);
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

// ...

console.log('Iniciando el proceso...');
hola('Joel')
    .then(nombre => adios(nombre))
    .then(nombre => {
        console.log('Terminado el proceso, Don',nombre);
    })