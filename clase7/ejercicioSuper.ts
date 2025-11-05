//Crea una clase Producto que contenga propiedades privadas como nombre, precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea negativo y que cantidad no sea menor que 0. 

class Producto {
    private _nombre: string;
    private _precio!: number;
    private _cantidad!: number;
    constructor(nombre: string, precio: number, cantidad: number) {
        this._nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    get nombre(): string {
        return this._nombre;
    }
    get precio(): number {
        return this._precio;
    }
    set precio(value: number) {
        if (value < 0) {
            console.log("Error: El precio no puede ser negativo.");
        } else {
            this._precio = value;
        }
    }
    get cantidad(): number {
        return this._cantidad;
    }
    set cantidad(value: number) {
        if (value < 0) {
            console.log("Error: La cantidad no puede ser menor que 0.");
        } else {
            this._cantidad = value;
        }
    }
}

const miProducto = new Producto("Laptop", 1500, 10);
console.log(`Producto: ${miProducto.nombre}, Precio: $${miProducto.precio}, Cantidad: ${miProducto.cantidad}`);
// Salida: Producto: Laptop, Precio: $1500, Cantidad: 10

const productoInvalido = new Producto("Smartphone", -800, -5);
// Salida:
// Error: El precio no puede ser negativo.
// Error: La cantidad no puede ser menor que 0.
