//Crea un sistema que represente el juego Pac-Man utilizando clases. Define una clase Personaje que sirva como clase base para PacMan y Fantasma. Implementa métodos para moverse por el mapa y realizar acciones. Define una interfaz EntidadMovible que contenga el método moverse. Usa herencia para que PacMan y los fantasmas compartan el comportamiento de moverse y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento. 

//tupla para coordenadas del mapa
type CoordenadasMapa = [number, number];

// interfaz entidad movible
interface EntidadMovible {
    moverse(): void;
}

// clase base personaje
abstract class Personaje implements EntidadMovible {
    protected posicion: CoordenadasMapa;
    protected velocidad: number;

    constructor(posicionInicial: CoordenadasMapa, velocidad: number) {
        this.posicion = posicionInicial;
        this.velocidad = velocidad;
    }

    // metodo moverse (polimorfismo)
    public abstract moverse(): void;

    // metodo para obtener posicion
    public obtenerPosicion(): CoordenadasMapa {
        return this.posicion;
    }

    // Método para cambiar la posición
    protected actualizarPosicion(x: number, y: number): void {
        this.posicion = [this.posicion[0] + x, this.posicion[1] + y];
    }
}

// clase PacMan
class PacMan extends Personaje {
    constructor(posicionInicial: CoordenadasMapa, velocidad: number) {
        super(posicionInicial, velocidad);
    }
    // implementacion del metodo moverse
    public moverse(): void {
        // Lógica de movimiento específica para PacMan
        this.actualizarPosicion(this.velocidad, 0); // Moverse a la derecha
        console.log(`PacMan se movió a la posición: ${this.posicion}`);
    }
}

// clase Fantasma
class Fantasma extends Personaje {
    constructor(posicionInicial: CoordenadasMapa, velocidad: number) {
        super(posicionInicial, velocidad);
    }
    // implementacion del metodo moverse
    public moverse(): void {
        // Lógica de movimiento específica para Fantasma
        this.actualizarPosicion(0, this.velocidad); // Moverse hacia abajo
        console.log(`Fantasma se movió a la posición: ${this.posicion}`);
    }
}

//Ejemplo de uso
const pacman = new PacMan([0, 0], 5);
const fantasma = new Fantasma([10, 10], 3);
pacman.moverse();
fantasma.moverse();
console.log(`Posición actual de PacMan: ${pacman.obtenerPosicion()}`);
console.log(`Posición actual del Fantasma: ${fantasma.obtenerPosicion()}`);