//Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe contener el nombre del cliente, la cantidad de flores y el tipo de flores. Implementa las siguientes funciones: • Añadir un pedido. • Programar el envío de un pedido utilizando setTimeout() para simular un retraso de 5 segundos.  Mostrar todos los pedidos pendientes. 

// tipo pedido
type Pedido = {
    nombreCliente: string;
    cantidadFlores: number;
    tipoFlores: string;
    enviado: boolean;
}

class GestionPedidos {
    private pedidos: Pedido[] = []; 
    // metodo agregar pedido
    public agregarPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
        console.log(`Pedido agregado para ${pedido.nombreCliente}`);
    }

    programarEnvio(nombreCliente: string) {
        console.log(`Programando envío ...`);
        setTimeout(() => {
            const pedido = this.pedidos.find(p => p.nombreCliente === nombreCliente && !p.enviado);
            if (pedido) {
                pedido.enviado = true;
                console.log(`Pedido para ${pedido.nombreCliente} enviado!`);
            } else {
                console.log(`No se encontró un pedido pendiente para ${nombreCliente}.`);
            }
        }, 5000); // 5 segundos
    }


// metodo mostrar pedidos pendientes
    public mostrarPedidosPendientes(): void {
        console.log("Pedidos pendientes:");
        this.pedidos.forEach((pedido, index) => {
            if (!pedido.enviado) {
                console.log(`${index + 1}. Cliente: ${pedido.nombreCliente}, Cantidad: ${pedido.cantidadFlores}, Tipo: ${pedido.tipoFlores}`);
            }
        });
    }

}
//Ejemplo de uso
const gestionPedidos = new GestionPedidos();
gestionPedidos.agregarPedido({ nombreCliente: "Ana", cantidadFlores: 10, tipoFlores: "Rosas", enviado: false });
gestionPedidos.agregarPedido({ nombreCliente: "Luis", cantidadFlores: 5, tipoFlores: "Tulipanes", enviado: false });
gestionPedidos.mostrarPedidosPendientes();
gestionPedidos.programarEnvio("Ana");
gestionPedidos.mostrarPedidosPendientes();
gestionPedidos.programarEnvio("Luis");

//chequear con el de clase. Set timeout final