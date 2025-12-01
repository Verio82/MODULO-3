//funcion que simula un proceso asincrono que tarda 3 segundos en completarse
function proceso () {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve('Proceso completado');
        },3000);
});
}

async function ejecutarProceso () {
    console.log('Iniciando proceso...');
    
    //pausamos la ejecucion hasta que proceso() se resuelva
    const resultado = await proceso();  //espera a que la promesa se resuelva
    console.log(resultado);  //salida esperada: Proceso completado despues de la espera
    console.log("Proceso terminado");

}
    
//ejecutamos la funcion

ejecutarProceso()
