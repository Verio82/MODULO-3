//Desarrolla una clase Vacacion que tenga propiedades privadas para destino, duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de que duracion no sea menor que 1 y presupuesto sea mayor que 0. 

class Vacacion {
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;
    constructor(destino: string, duracion: number, presupuesto: number) {
        this._destino = destino;
        this.duracion = duracion;
        this.presupuesto = presupuesto;
    }
    get destino(): string {
        return this._destino;
    }
    get duracion(): number {
        return this._duracion;
    }
    set duracion(value: number) {
        if (value < 1) {
            console.log("Error: La duración no puede ser menor que 1 día.");
        } else {
            this._duracion = value;
        }
    }
    get presupuesto(): number {
        return this._presupuesto;
    }
    set presupuesto(value: number) {
        if (value <= 0) {
            console.log("Error: El presupuesto debe ser mayor que 0.");
        } else {
            this._presupuesto = value;
        }
    }
}

const miVacacion = new Vacacion("Hawái", 7, 2000);
console.log(`Destino: ${miVacacion.destino}, Duración: ${miVacacion.duracion} días, Presupuesto: $${miVacacion.presupuesto}`);
// Salida: Destino: Hawái, Duración: 7 días, Presupuesto: $2000

const vacacionInvalida = new Vacacion("París", 0, -500);
// Salida:
// Error: La duración no puede ser menor que 1 día.
// Error: El presupuesto debe ser mayor que 0.

