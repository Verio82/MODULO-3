//Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas. Cada consulta debe realizarse usando una función que retorne una promesa. Usa Promise.all() para esperar a que todas las consultas se completen y luego: 1. Imprime un mensaje con los resultados si todas las consultas fueron exitosas. 2. Si alguna falla, imprime un mensaje de error. 3. Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 segundos). Opcional: Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: "No se pudo completar la operación: [API que falló]".

function consultaApi(api, tiempo) {
    return new Promise((resolve, reject) => {
    console.log(`Consultando ${api}...`);
    setTimeout(() => {
        const exito = Math.random() > 0.3; // Simula éxito o fallo
        if (exito) {
            resolve(`${api} respondida.`);
        } else {
            reject(`Error en ${api}`);
        }
    }, tiempo);
    });
}

const api1 = consultaApi("API de Usuarios", 2000);
const api2 = consultaApi("API de Productos", 3000);
const api3 = consultaApi("API de Ventas", 4000);

Promise.all([api1, api2, api3])
    .then((resultados) => {
    console.log("Todas las consultas fueron exitosas:");    
    resultados.forEach((resultado) => console.log(resultado));
    })
    .catch((error) => {
    console.log(`No se pudo completar la operación: ${error}`);
    });
