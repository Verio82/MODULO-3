//funcion que simule una tarea asincrona de 2 segundos

function tareaAsincrona1() {
    return new Promise(resolve => setTimeout(() => resolve('Tarea asincrona 1 completada'), 2000));
}

function tareaAsincrona2() {
    return new Promise(resolve => setTimeout(() => resolve('Tarea asincrona 2 completada'), 2000));
}

function tareaAsincrona3() {
    return new Promise(resolve => setTimeout(() => resolve('Tarea asincrona 3 completada'), 2000));
}

//funcion principal para ejecutar concurrentemente
async function ejecutarConcurrentemente() {
    try {

        const promesa1 = tareaAsincrona1();
        const promesa2 = tareaAsincrona2();
        const promesa3 = tareaAsincrona3();

        const resultado = await Promise.all([promesa1, promesa2, promesa3]);
        console.log("Resultados: ", resultado); 
    } catch (error) {
        console.error("Error en alguna de las tareas: ", error);
    }    
    }

    //Llamamos a la funcion principal
    ejecutarConcurrentemente();