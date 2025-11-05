//Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y Moto. Cada clase debe sobrescribir el método arrancar de la clase base para proporcionar una implementación específica de cómo arrancar. 

export abstract class Vehiculo {
    abstract arrancar(): void;
}   
class Coche extends Vehiculo {
    arrancar(): void {
        console.log("El coche ha arrancado con un rugido del motor.");
    }
}

class Moto extends Vehiculo {
    arrancar(): void {
        console.log("La moto ha arrancado con un sonido agudo del motor.");
    }
}

const miCoche = new Coche();
miCoche.arrancar();    
// Salida: El coche ha arrancado con un rugido del motor.

const miMoto = new Moto();
miMoto.arrancar();    
// Salida: La moto ha arrancado con un sonido agudo del motor.
