//Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error. Utiliza try/catch para manejar el error de manera adecuada. Esta simulación es relevante para entender cómo gestionar errores en procesos financieros o de pago, en los cuales las validaciones son cruciales. 

function procesoPago(monto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (monto > 1000) {
                reject('Error: El monto del pago excede el límite permitido.');
            } else {
                resolve('Pago procesado con éxito.');
            }
        }, 3000);
    });

}

async function realizarPago(monto) {
    try {
        console.log('Iniciando proceso de pago...');
        const resultado = await procesoPago(monto);
        console.log(resultado);
    } catch (error) {
        console.error('Ocurrió un error en el proceso de pago:', error);
    } finally {
        console.log('Proceso de pago finalizado.');
    }
}

// Ejecutamos la función con un monto de prueba
realizarPago(1200); // Cambia el monto para probar diferentes escenarios    
realizarPago(800);