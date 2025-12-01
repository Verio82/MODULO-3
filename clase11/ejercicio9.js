//Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. Crea una función tarea1 que simule la realización de una tarea en 2 segundos. Luego, escribe otra función tarea2 que dependa de la finalización exitosa de tarea1. Si tarea1 se completa, tarea2 debe ejecutarse; de lo contrario, no debe ejecutarse nada. Este ejercicio muestra cómo encadenar tareas y ejecutar una tarea condicionalmente en función del resultado de una promesa.

function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarea 1 completada');
            resolve('Resultado de tarea 1');
        }, 2000);
    });
}

function tarea2(resultadoTarea1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Tarea 2 completada usando:', resultadoTarea1);
            resolve('Resultado de tarea 2');
        }, 2000);
    });
}

async function ejecutarTareas() {
    try {
        const resultado1 = await tarea1();
        const resultado2 = await tarea2(resultado1);
        console.log('Ambas tareas completadas con éxito:', resultado2);
    } catch (error) {
        console.error('Error en la ejecución de las tareas:', error);
    }
}

// Ejecutamos la función para iniciar las tareas
ejecutarTareas();