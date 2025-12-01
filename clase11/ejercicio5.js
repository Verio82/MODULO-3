//En un sistema de e-commerce, las actualizaciones de datos de usuario y pedidos suelen ejecutarse de manera concurrente para mayor eficiencia. Escribe dos funciones asíncronas, una que actualice los datos del usuario y otra que actualice los pedidos, ambas con un tiempo de espera de 1.5 segundos. Usa Promise.all para ejecutar ambas funciones en paralelo y luego muestra un mensaje cuando ambas actualizaciones se hayan completado.

function actualizarDatosUsuario() {
    return new Promise(resolve => setTimeout(() => resolve('Datos de usuario actualizados'), 1500));
}

function actualizarPedidos() {
    return new Promise(resolve => setTimeout(() => resolve('Pedidos actualizados'), 1500));
}

async function actualizarTodo() {
        const promesaUsuario = actualizarDatosUsuario();
        const promesaPedidos = actualizarPedidos();
    
        const resultados = await Promise.all([promesaUsuario, promesaPedidos]);
        console.log(resultados);
}

//Llamamos a la funcion principal
actualizarTodo();