//funcion asincrona basica que devolvera un mensaje

async function saludo () {
    //el string Hola! sera automaticamente envuelto en una promesa resuelta
    return 'Hola!';
}

saludo().then( mensaje => console.log(mensaje) );  //salida esperada Hola!