//Define una clase Coche con propiedades marca, modelo (públicas) y precio (privada).2. Implementa un método para mostrar la información del coche que accedaa las propiedades públicas y no a la privada directamente.

class Coche {
    public marca: string;
    public modelo: string;
    private precio: number;

    constructor(marca: string, modelo: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    public mostrarInformacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}.`;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 20000);
console.log(miCoche.mostrarInformacion());