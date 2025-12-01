//Diseña una clase Bodega que tenga propiedades privadas para nombre, direccion, y inventario (un array de objetos con producto y cantidad). Implementa métodos para agregar productos al inventario, eliminar productos, y listar el inventario. Si se intenta agregar un producto con una cantidad negativa, imprime un mensaje informativo. 

export class Bodega {
    // propiedades privadas
    private nombre: string;
    private direccion: string;
    private inventario: { producto: string; cantidad: number }[] = [];


    // constructor
    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    
    // metodo agregar producto
    public agregarProducto(producto: string, cantidad: number): void {
        if (cantidad < 0) {
            console.log("No se puede agregar una cantidad negativa.");
            return;
        } else {
            // buscar producto en inventario
            const item = this.inventario.find((item) => item.producto === producto);
            if (item) {
                item.cantidad += cantidad; // actualizar cantidad
            } else {
                this.inventario.push({ producto, cantidad }); // agregar nuevo producto
            }
            console.log(`Se han agregado ${cantidad} unidades de ${producto}.`);
        }}

    public eliminarProducto(producto: string): void {
        const index = this.inventario.findIndex((item) => item.producto === producto);  
        if (index !== -1) {
            this.inventario.splice(index, 1);
            console.log(`Producto ${producto} eliminado del inventario.`);
        } else {
            console.log(`Producto ${producto} no encontrado en el inventario.`);
        }
    }

    // metodo listar inventario
    public listarInventario(): void {
        console.log(`Inventario de la Bodega ${this.nombre}:`);
        this.inventario.forEach((item, index) => {
            console.log(`${index + 1}. Producto: ${item.producto}, Cantidad: ${item.cantidad}`);
        });
    }
}
    

//Ejemplo de uso
const bodega = new Bodega("Bodega Central", "Calle Falsa 123");
bodega.agregarProducto("Manzanas", 50);
bodega.agregarProducto("Naranjas", 30);
bodega.agregarProducto("Manzanas", 20); // agregar más manzanas
bodega.agregarProducto("Peras", -10); // intento de agregar cantidad negativa
bodega.listarInventario();
bodega.eliminarProducto("Naranjas");
bodega.listarInventario();