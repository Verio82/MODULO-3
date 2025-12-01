//Imagina que trabajas en un restaurante y tienes que gestionar varios pedidos al mismo tiempo. Crea una función llamada prepararPedido() que reciba como parámetros: • El nombre del plato • El tiempo estimado de preparación (en milisegundos) • Un callback que se ejecutará cuando el pedido esté listo Luego, simula la preparación de tres pedidos (por ejemplo: Pizza, Hamburguesa y Ensalada) con tiempos de preparación distintos. La función debe imprimir un mensaje al iniciar cada pedido y otro mensaje cuando el pedido esté listo. Además: 1. Implementa otro callback que se ejecute al final, después de todos los pedidos, para mostrar el mensaje: "¡Todos los pedidos han sido completados!". 2. Controla el orden en el que se imprimen los mensajes para evitar que se mezclen (es decir, no puede imprimirse el mensaje final hasta que todos los pedidos estén listos). Objetivo: Practicar el uso de callbacks anidados y la gestión de procesos asincrónicos. Asegúrate de que se ejecuta cada función en el momento correcto. 

function prepararPedido(plato: string, tiempoPreparacion: number, callback: () => void): void {
    console.log(`Iniciando la preparación de: ${plato}`);
    setTimeout(() => {
        console.log(`El pedido de ${plato} está listo.`);
        callback();
    }, tiempoPreparacion);
}

function completarPedidos(): void {
    console.log("¡Todos los pedidos han sido completados!");
}

prepararPedido("Pizza", 3000, () => {
    prepararPedido("Hamburguesa", 2000, () => {
        prepararPedido("Ensalada", 1000, () => {
            completarPedidos();
        });
    });
});
