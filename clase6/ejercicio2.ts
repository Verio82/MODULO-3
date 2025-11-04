// Crea una clase base Maestro con propiedades protegidas nombre y materia, y un método enseñar(). Luego, crea una clase derivada MaestroMatematicas que extienda de Maestro y sobrescriba el método enseñar() para imprimir un mensaje específico de matemáticas.

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre: string, materia: string) {
        this.nombre = nombre;
        this.materia = materia;
    }

    enseñar(): void {
        console.log(`${this.nombre} está enseñando ${this.materia}.`);
    }
}

class MaestroMatematicas extends Maestro {
    constructor(nombre: string) {
        super(nombre, "Matemáticas");
    }

    enseñar(): void {
        console.log(`${this.nombre} está enseñando álgebra y geometría.`);
    }
}

const maestro = new MaestroMatematicas("Juan Pérez");
maestro.enseñar();    
// Salida: Juan Pérez está enseñando álgebra y geometría.