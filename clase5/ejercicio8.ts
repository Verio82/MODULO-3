//Crea un sistema de gestión de Vehículos que incluya las siguientes clases: o Vehiculo: Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo. o Coche: Clase que extiende Vehiculo e incluye una propiedad para tipoCombustible y un método para mostrar la información completa del coche. o Motocicleta: Clase que extiende Vehiculo e incluye una propiedad para cilindrada y un método para mostrar la información completa de la motocicleta.

class Vehiculo {
    public marca: string;
    public modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    public mostrarInformacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}.`;
    }
}

class Auto extends Vehiculo {
    public tipoCombustible: string;
    constructor(marca: string, modelo: string, tipoCombustible: string) {
        super(marca, modelo);
        this.tipoCombustible = tipoCombustible;
    }
    public mostrarInformacion(): string {
        return `${super.mostrarInformacion()} Tipo de Combustible: ${this.tipoCombustible}.`;
    }
}

class Motocicleta extends Vehiculo {
    public cilindrada: number;
    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }   
    public mostrarInformacion(): string {
        return `${super.mostrarInformacion()} Cilindrada: ${this.cilindrada} cc.`;
    }
}

const miAuto = new Auto("Honda", "Civic", "Gasolina");
console.log(miAuto.mostrarInformacion());
const miMotocicleta = new Motocicleta("Yamaha", "MT-07", 689);
console.log(miMotocicleta.mostrarInformacion());    
