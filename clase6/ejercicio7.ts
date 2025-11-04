//Crea una clase abstracta Vehiculo con una propiedad velocidad y un método abstracto mover(). Luego, implementa dos clases concretas: Auto y Bicicleta. Usa los modificadores de acceso para controlar la visibilidad de las propiedades. 

abstract class Vehiculos {
    protected velocidad: number;    
    constructor(velocidad: number) {
        this.velocidad = velocidad;
    }
    abstract mover(): void;
}

class Autos extends Vehiculos {

    constructor(velocidad: number) {
        super(velocidad);
    }
    mover(): void {
        console.log(`El auto se mueve a una velocidad de ${this.velocidad} km/h.`);
    }
}

class Bicicletas extends Vehiculos {

    constructor(velocidad: number) {
        super(velocidad);
    }
    mover(): void {
        console.log(`La bicicleta se mueve a una velocidad de ${this.velocidad} km/h.`);
    }
}

const miAutos = new Autos(120);
miAutos.mover();    
// Salida: El auto se mueve a una velocidad de 120 km/h.

const miBicicleta = new Bicicletas(25);
miBicicleta.mover();    
// Salida: La bicicleta se mueve a una velocidad de 25 km/h.
