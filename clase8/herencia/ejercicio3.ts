// Desarrolla un sistema para una tienda en línea. Crea una clase base Producto que tenga propiedades como nombre, precio, y un método detallesProducto(). Luego, crea dos clases derivadas: Electronico y Ropa, ambas deben sobrescribir el método detallesProducto() con información más específica. Crea una interfaz Envio que defina el método calcularEnvio(). La clase Electronico debe implementar esta interfaz y el cálculo del envío será un 10% del precio del producto. 

// clase base
export class Producto {
    constructor(protected nombre: string, protected precio: number) {}
    detallesProducto(): void {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }
}

// interfaz
export interface Envio {
    calcularEnvio(): number; // firma
}

// clases derivadas
export class Electronico extends Producto implements Envio {
    constructor(nombre: string, precio: number, private garantia: number) {
        super(nombre, precio);
    }
    detallesProducto(): void {
        console.log(`Electrónico: ${this.nombre}, Precio: $${this.precio}, Garantía: ${this.garantia} años`);
    }   
    calcularEnvio(): number {
        return this.precio * 0.10; // 10% del precio
    }
}

export class Ropa extends Producto {
    constructor(nombre: string, precio: number, private talla: string) {
        super(nombre, precio);
    }
    detallesProducto(): void {
        console.log(`Ropa: ${this.nombre}, Precio: $${this.precio}, Talla: ${this.talla}`);
    }
}

//Ejemplo de uso
const laptop = new Electronico("Laptop", 1200, 2);
laptop.detallesProducto();
console.log(`Costo de envío: $${laptop.calcularEnvio()}`);
