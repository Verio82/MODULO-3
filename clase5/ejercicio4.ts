//1. Define una interfaz llamada IPersona con propiedades nombre, edad y un método presentarse().2. Crea una clase llamada Persona que implemente esta interfaz yproporciona la implementación del método presentarse().

interface IPersona {
    nombre: string;
    edad: number;
    presentarse(): string;
}

class Persona implements IPersona {
    nombre: string;
    edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}

const persona1 = new Persona("Ana", 30);
console.log(persona1.presentarse())