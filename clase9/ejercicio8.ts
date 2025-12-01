//Crea un sistema para gestionar una nave espacial en una misión de recolección de recursos en diferentes planetas. Define una clase NaveEspacial con atributos como combustible y capacidadDeCarga. Implementa métodos para viajar entre planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el combustible. Usa tuplas para representar las coordenadas espaciales de los planetas y una interfaz para los tipos de recursos recolectados. 

// interfaz recurso
interface Recurso {
    oxigeno: number;
    minerales: number;
    agua: number;
}

// clase nave espacial
class NaveEspacial {
    private combustible: number;
    private capacidadDeCarga: number;
    private cargaActual: Recurso;
    private posicion: [number, number, number]; // coordenadas espaciales (x, y, z)

    constructor(combustibleInicial: number, capacidadDeCarga: number) {
        this.combustible = combustibleInicial;
        this.capacidadDeCarga = capacidadDeCarga;
        this.cargaActual = { oxigeno: 0, minerales: 0, agua: 0 };
        this.posicion = [0, 0, 0]; // posición inicial
    }
    // metodo viajar
    public viajar(nuevasCoordenadas: [number, number, number], consumoCombustible: number): void {
        if (this.combustible >= consumoCombustible) {
            this.posicion = nuevasCoordenadas;  
            this.combustible -= consumoCombustible;
            console.log(`Viajando a coordenadas: ${nuevasCoordenadas}. Combustible restante: ${this.combustible}`);
        } else {
            console.log("No hay suficiente combustible para el viaje.");
        }
    }

    // metodo recolectar recursos
    public recolectarRecursos(recursos: Recurso): void {
        const totalCarga = this.cargaActual.oxigeno + this.cargaActual.minerales + this.cargaActual.agua +
                           recursos.oxigeno + recursos.minerales + recursos.agua;
        if (totalCarga <= this.capacidadDeCarga) {
            this.cargaActual.oxigeno += recursos.oxigeno;
            this.cargaActual.minerales += recursos.minerales;
            this.cargaActual.agua += recursos.agua;
            console.log(`Recursos recolectados: Oxígeno: ${recursos.oxigeno}, Minerales: ${recursos.minerales}, Agua: ${recursos.agua}`);
        } else {
            console.log("No hay suficiente capacidad de carga para recolectar estos recursos.");
        }
    }

    // metodo mostrar estado
    public mostrarEstado(): void {
        console.log(`Posición actual: ${this.posicion}`);
        console.log(`Combustible restante: ${this.combustible}`);
        console.log(`Carga actual - Oxígeno: ${this.cargaActual.oxigeno}, Minerales: ${this.cargaActual.minerales}, Agua: ${this.cargaActual.agua}`);
    }
}

//Ejemplo de uso
const nave = new NaveEspacial(1000, 500);
nave.mostrarEstado();
nave.viajar([10, 20, 30], 200);
nave.recolectarRecursos({ oxigeno: 100, minerales: 150, agua: 50 });
nave.mostrarEstado();
nave.viajar([50, 60, 70], 900);
nave.recolectarRecursos({ oxigeno: 200, minerales: 200, agua: 200 });
nave.mostrarEstado();