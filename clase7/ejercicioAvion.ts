//Crea una clase Airplane con propiedades privadas para el modelo, capacidad y velocidad. Implementa getters y setters para cada propiedad, asegurándote de validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa. Nota sobre la inicialización de propiedades En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las propiedades _capacidad y _velocidad. Esto se hace para evitar un error de TypeScript que indica que estas propiedades no estaban inicializadas en el constructor. Este enfoque asegura que las propiedades serán asignadas adecuadamente en el constructor mediante el uso de los setters, manteniendo así la validación de los valores. Tener esto en cuenta para los demás ejercicios. 

class Airplane {
    private _modelo: string;
    private _capacidad!: number;
    private _velocidad!: number;
    constructor(modelo: string, capacidad: number, velocidad: number) {
        this._modelo = modelo;
        this.capacidad = capacidad;
        this.velocidad = velocidad;
    }
    get modelo(): string {
        return this._modelo;
    }
    get capacidad(): number {
        return this._capacidad;
    }
    set capacidad(value: number) {
        if (value < 0) {
            console.log("Error: La capacidad no puede ser menor que 0.");
        } else {
            this._capacidad = value;
        }
    }
    get velocidad(): number {
        return this._velocidad;
    }
    set velocidad(value: number) {
        if (value < 0) {
            console.log("Error: La velocidad no puede ser negativa.");
        } else {
            this._velocidad = value;
        }
    }
}

const myAirplane = new Airplane("Boeing 747", 416, 900);
console.log(`Modelo: ${myAirplane.modelo}, Capacidad: ${myAirplane.capacidad}, Velocidad: ${myAirplane.velocidad} km/h`);
// Salida: Modelo: Boeing 747, Capacidad: 416, Velocidad: 900 km/h

const avionInvalido = new Airplane("Airbus A320", -150, -800);
// Salida:
// Error: La capacidad no puede ser menor que 0.
// Error: La velocidad no puede ser negativa.