//Crea una clase base Vehiculo con propiedades como marca, modelo, y un método detallesVehiculo(). Luego, crea dos clases derivadas: Automovil y Moto, cada una con propiedades adicionales y sobrescribiendo el método detallesVehiculo(). Crea también una interfaz Mantenimiento que tenga el método calcularCostoMantenimiento(). Ambas clases derivadas deben implementar esta interfaz, pero con lógicas distintas para calcular el costo del mantenimiento. 

// clase base
export class Vehiculo {
    constructor(protected marca: string, protected modelo: string) {}
    detallesVehiculo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo}`);
    }
}

// interfaz
export interface Mantenimiento {
    calcularCostoMantenimiento(): number; // firma
}

// clases derivadas
export class Automovil extends Vehiculo implements Mantenimiento {
    constructor(marca: string, modelo: string, private puertas: number) {
        super(marca, modelo);
    }
    detallesVehiculo(): void {
        console.log(`Automóvil: ${this.marca} ${this.modelo}, Puertas: ${this.puertas}`);
    }
    calcularCostoMantenimiento(): number {
        return 300; // costo fijo para automóviles
    }
}

export class Moto extends Vehiculo implements Mantenimiento {
    constructor(marca: string, modelo: string, private tipo: string) {
        super(marca, modelo);
    }
    detallesVehiculo(): void {
        console.log(`Moto: ${this.marca} ${this.modelo}, Tipo: ${this.tipo}`);
    }
    calcularCostoMantenimiento(): number {
        return 150; // costo fijo para motos
    }
}

//Ejemplo de uso
const auto = new Automovil("Toyota", "Corolla", 4);
auto.detallesVehiculo();
console.log(`Costo de mantenimiento: $${auto.calcularCostoMantenimiento()}`);
const moto = new Moto("Honda", "CBR500R", "Deportiva");
moto.detallesVehiculo();
console.log(`Costo de mantenimiento: $${moto.calcularCostoMantenimiento()}`);

