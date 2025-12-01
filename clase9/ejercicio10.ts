//Crea un sistema de gestión de productos en una tienda de belleza. Define una clase Producto con atributos como nombre, precio y categoria. Luego, crea una clase Inventario que gestione un conjunto de productos y tenga métodos para agregar, eliminar y buscar productos por categoría. Usa polimorfismo para manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar, etc.

// clase base producto  
export class Producto {
    protected nombre: string;
    protected precio: number;
    protected categoria: string;
    constructor(nombre: string, precio: number, categoria: string) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    getNombre(): string {
        return this.nombre;
    }   

    getPrecio(): number {
        return this.precio;
    }

    getCategoria(): string {
        return this.categoria;
    }

    descripcion(): string {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Categoria: ${this.categoria}`;
    }
}

// clase cosmetico que extiende producto
export class Cosmetico extends Producto {
    private tipoPiel: string;
    constructor(nombre: string, precio: number, tipoPiel: string) {
        super(nombre, precio, 'Cosmetico');
        this.tipoPiel = tipoPiel;
    }
    
    descripcion(): string {
        return `${super.descripcion()}, Tipo de Piel: ${this.tipoPiel}`;
    }
}

// clase tratamiento capilar que extiende producto
export class TratamientoCapilar extends Producto {
    private tipoCabello: string;
    constructor(nombre: string, precio: number, tipoCabello: string) {
        super(nombre, precio, 'Tratamiento Capilar');
        this.tipoCabello = tipoCabello;
    }


    descripcion(): string {
        return `${super.descripcion()}, Tipo de Cabello: ${this.tipoCabello}`;
    }
}

// clase inventario para gestionar productos
export class Inventario {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }
    eliminarProducto(nombre: string): void {
        this.productos = this.productos.filter(prod => prod.getNombre() !== nombre);
    }
    buscarPorCategoria(categoria: string): Producto[] {
        return this.productos.filter(prod => prod.getCategoria() === categoria);
    }

    listarProductos(): void {
        this.productos.forEach(prod => {
            console.log(prod.descripcion());
        });
    }
}


// ejemplo de uso
const inventario = new Inventario();
const cosmetico1 = new Cosmetico('Crema Hidratante', 25.99, 'Seca');
const tratamiento1 = new TratamientoCapilar('Mascarilla Reparadora', 15.49, 'Dañado');
inventario.agregarProducto(cosmetico1);
inventario.agregarProducto(tratamiento1);
console.log('--- Listado de Productos ---');
inventario.listarProductos();
console.log('--- Buscar por Categoria: Cosmetico ---');
const cosmeticos = inventario.buscarPorCategoria('Cosmetico');
cosmeticos.forEach(prod => console.log(prod.descripcion()));
inventario.eliminarProducto('Crema Hidratante');
console.log('--- Listado de Productos después de eliminar Crema Hidratante ---');
inventario.listarProductos();