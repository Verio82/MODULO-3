//simulamos una funcion que solicita datos con una opcion de exito o error
function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve('Datos obtenidos correctamente'); //resuelve con exito
            } else {
                reject('Error al obtener los datos'); //lanza un error
            }
        }, 3000);
    });
}

//funcion asincrona que intenta obtener los datos y maneja posibles errores
async function consultarDatos() {
    try {
        console.log('Iniciando consulta de datos...');
        //pausa hasta que obtenerDatos se resuelva o rechace
        const resultado = await obtenerDatos(true); // Cambia a false para simular un error
        console.log(resultado); // Salida esperada: Datos obtenidos correctamente
    } catch (error) {
        console.error('Ocurrio un error:', error);  //captura y muestra el error
    } finally {
        console.log('Finalizando consulta de datos '); //este bloque siempre se ejecuta
    }
}

// Ejecutamos la funcion
consultarDatos();
