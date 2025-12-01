//En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y un identificador único. Implementa las siguientes funciones: • Añadir un nuevo mueble. • Actualizar el precio de un mueble después de 3 segundos utilizando setTimeout(). • Mostrar el inventario de muebles. 

// tipo mueble
type Mueble = {
    id: number;
    nombre: string;
    precio: number;
}

class InventarioMuebles {
    private muebles: Mueble[] = [];
    // metodo agregar mueble
    public agregarMueble(mueble: Mueble): void {
        this.muebles.push(mueble);
        console.log(`Mueble agregado: ${mueble.nombre} con precio ${mueble.precio}`);
    }
    // metodo actualizar precio
    public actualizarPrecio(id: number, nuevoPrecio: number): void {
        console.log(`Actualizando precio del mueble con ID ${id}...`);  
        setTimeout(() => {
            const mueble = this.muebles.find(m => m.id === id);
            if (mueble) {
                mueble.precio = nuevoPrecio;
                console.log(`Precio del mueble ${mueble.nombre} actualizado a ${nuevoPrecio}`);
            } else {
                console.log(`No se encontró un mueble con ID ${id}.`);
            }
        }, 3000); // 3 segundos
    }

    // metodo mostrar inventario
    public mostrarInventario(): void {
        console.log("Inventario de muebles:");
        this.muebles.forEach((mueble) => {
            console.log(`ID: ${mueble.id}, Nombre: ${mueble.nombre}, Precio: ${mueble.precio}`);
        });
    }
}
//Ejemplo de uso
const inventario = new InventarioMuebles();
inventario.agregarMueble({ id: 1, nombre: "Sofá", precio: 500 });
inventario.agregarMueble({ id: 2, nombre: "Mesa", precio: 300 });
inventario.mostrarInventario();
inventario.actualizarPrecio(1, 550);
inventario.mostrarInventario();