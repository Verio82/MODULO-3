//Diseña una clase Estudiante que contenga propiedades privadas para nombre, edad, y calificaciones. Implementa métodos para agregar calificaciones y calcular el promedio. Imprime un mensaje en caso de que se intente agregar una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para calcular el promedio.

class Student {
    private nombre: string;
    private edad: number;
    private calificaciones: number[];   
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = [];
    }

    agregarCalificacion(calificacion: number): void {
        if (calificacion < 0 || calificacion > 100) {
            console.log("Error: La calificación debe estar entre 0 y 100.");
        } else {
            this.calificaciones.push(calificacion);
            console.log(`Calificación ${calificacion} agregada para ${this.nombre}.`);
        }
    }

    calcularPromedio(): void {
        if (this.calificaciones.length === 0) {
            console.log("No hay calificaciones para calcular el promedio.");
            return;
        }
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        const promedio = suma / this.calificaciones.length;
        console.log(`El promedio de ${this.nombre} es ${promedio.toFixed(2)}.`);
    }
}

const estudiante = new Student("Luis", 20);
estudiante.agregarCalificacion(85);
estudiante.agregarCalificacion(92);
estudiante.agregarCalificacion(110);
estudiante.calcularPromedio();

const estudiante3 = new Student("Marta", 22);
estudiante3.calcularPromedio();

// Salida:
// Calificación 85 agregada para Luis.
// Calificación 92 agregada para Luis.
// Error: La calificación debe estar entre 0 y 100.
// El promedio de Luis es 88.50.
// No hay calificaciones para calcular el promedio.
