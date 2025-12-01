//Crea un sistema que gestione productos y órdenes de compra. Usa una clase abstracta Producto, clases concretas Electrónico y Alimento, y una clase OrdenCompra que contenga múltiples productos. 

// clase base
export abstract class Producto {
    constructor(protected nombre: string, protected precio: number) {}
    abstract detalles(): void;
}

// clases concretas
export class Electronico extends Producto {
    constructor(nombre: string, precio: number, private garantia: number) {
        super(nombre, precio);
    }
    detalles(): void {
        console.log(`Electrónico: ${this.nombre}, Precio: $${this.precio}, Garantía: ${this.garantia} años`);
    }
}

export class Alimento extends Producto {
    constructor(nombre: string, precio: number, private fechaCaducidad: string) {
        super(nombre, precio);
    }
    detalles(): void {
        console.log(`Alimento: ${this.nombre}, Precio: $${this.precio}, Fecha de Caducidad: ${this.fechaCaducidad}`);
    }
}

// clase OrdenCompra
export class OrdenCompra {
    private productos: Producto[] = []; 
    constructor(private idOrden: number) {}

    // metodo agregar producto
    public agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        console.log(`Producto ${producto['nombre']} agregado a la orden ${this.idOrden}`);
    }

    // metodo listar productos
    public listarProductos(): void {
        console.log(`Productos en la Orden ${this.idOrden}:`);
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}.`);
            producto.detalles();
        });
    }
}

//Ejemplo de uso
const orden = new OrdenCompra(101);
const laptop = new Electronico("Laptop", 1500, 2);
const manzanas = new Alimento("Manzanas", 3, "2024-12-01");
orden.agregarProducto(laptop);
orden.agregarProducto(manzanas);
orden.listarProductos();
