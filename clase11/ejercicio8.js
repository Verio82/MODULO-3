//Crea una función que simule la descarga de un archivo. Si el nombre del archivo es null o undefined, la descarga debe fallar y lanzar un error. Utiliza try/catch para manejar el error de manera adecuada. Detalles: • La función descargarArchivo debe recibir el nombre del archivo como parámetro. • Si el archivo es válido, simula la descarga con un retardo de 2 segundos y retorna el mensaje "Archivo [nombre] descargado". • En caso de que el nombre sea null o undefined, lanza el error "Error en la escarga". • Usa una función iniciarDescarga para invocar descargarArchivo y manejar el error. Este ejercicio refuerza el uso de try/catch en operaciones de descarga de archivos, algo muy útil cuando se manejan archivos en una aplicación.

function descargarArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombreArchivo === null || nombreArchivo === undefined) {
                reject('Error en la descarga.');
            } else {
                resolve(`Archivo ${nombreArchivo} descargado.`);
            }
        }, 2000);
    });
}

async function iniciarDescarga(nombreArchivo) {
    try {
        console.log('Iniciando descarga del archivo...');
        const resultado = await descargarArchivo(nombreArchivo);
        console.log(resultado);
    } catch (error) {
        console.error('Ocurrió un error en la descarga:', error);
    } finally {
        console.log('Proceso de descarga finalizado.');
    }
}

// Ejecutamos la función con un nombre de archivo de prueba
iniciarDescarga('documento.pdf'); // Cambia a null o undefined para probar el error    
iniciarDescarga(null);