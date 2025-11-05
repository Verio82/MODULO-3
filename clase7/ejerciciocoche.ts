//Diseña una clase Coche que represente un vehículo. Esta clase debe tener propiedades privadas para marca, modelo, año, y kilometraje. Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error. 

class Coche1 {
    private marca: string;
    private modelo: string;
    private año!: number;
    private kilometraje!: number;

    constructor(marca: string, modelo: string, año: number, kilometraje: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.setAño(año);
        this.setKilometraje(kilometraje);
    }
    private setAño(año: number): void {
        if (año < 1886) {
            console.log("Error: El año no puede ser menor que 1886.");
            this.año = 1886; // Asignar un valor por defecto válido
        } else {
            this.año = año;
        }   
    }

    private setKilometraje(kilometraje: number): void {
        if (kilometraje < 0) {
            console.log("Error: El kilometraje no puede ser negativo.");
            this.kilometraje = 0; // Asignar un valor por defecto válido
        } else {
            this.kilometraje = kilometraje;
        }
    }   
    encender(): void {
        console.log(`El coche ${this.marca} ${this.modelo} está encendido.`);
    }
    realizarViaje(distancia: number): void {
        if (distancia < 0) {
            console.log("Error: La distancia del viaje no puede ser negativa.");
            return;
        }
        this.kilometraje += distancia;
        console.log(`El coche ha realizado un viaje de ${distancia} km. Kilometraje total: ${this.kilometraje} km.`);
    }
}

const miCoche1 = new Coche1("Toyota", "Corolla", 2020, 15000);
miCoche1.encender();
miCoche1.realizarViaje(100);
miCoche1.realizarViaje(-50);
// Salida:
// El coche Toyota Corolla está encendido.
// El coche ha realizado un viaje de 100 km. Kilometraje total: 15100 km.
// Error: La distancia del viaje no puede ser negativa.