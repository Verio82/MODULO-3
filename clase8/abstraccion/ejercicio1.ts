//Ejercicio 1: Comparación Completa - Sistema de Transporte Público Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público. • Crea una clase abstracta Transporte con un método abstracto mover(). • Define dos interfaces: o Electrico con el método cargarBateria(). o Combustible con el método llenarTanque(). • Implementa dos clases: o AutobusElectrico: Extiende de Transporte e implementa Electrico. o Taxi: Extiende de Transporte e implementa Combustible. 

// clase base
export abstract class Transporte {
    abstract mover(): void;
}

// interfaces
export interface Electrico {
    cargarBateria(): void;
}

export interface Combustible {
    llenarTanque(): void;
}   

// clases concretas
export class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
        console.log("El autobús eléctrico se está moviendo silenciosamente.");
    }
    cargarBateria(): void {
        console.log("Cargando la batería del autobús eléctrico.");
    }
}

export class Taxi extends Transporte implements Combustible {
    mover(): void {
        console.log("El taxi está en movimiento.");
    }
    llenarTanque(): void {
        console.log("Llenando el tanque de combustible del taxi.");
    }
}

//Ejemplo de uso
const autobus = new AutobusElectrico();
autobus.mover();
autobus.cargarBateria();
const taxi = new Taxi();
taxi.mover();
taxi.llenarTanque();
