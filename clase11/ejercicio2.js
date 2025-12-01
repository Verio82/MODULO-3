//Escribe una función que simule la obtención de datos de una base de datos o API. La función debe simular un retraso de 2 segundos para obtener los datos. Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente). Detalles: • Utiliza async y await para hacer que la función sea asíncrona. • Usa try/catch para capturar posibles errores. • Si todo va bien, muestra el mensaje "Datos obtenidos con éxito". • En caso de error, muestra "Error al leer datos". Esta simulación es muy útil para ver cómo manejar errores en operaciones de obtención de datos, una tarea común en programación backend. 

function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.5; // 50% de probabilidad de exito o fallo
            if (exito) {
                resolve('Datos obtenidos con éxito');
            } else {
                reject('Error al leer datos');
            }
        }, 2000);
    });
}

async function leerDatos() {
    try {
        const resultado = await obtenerDatos();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}

leerDatos();