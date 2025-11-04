//Crea una clase llamada Mariposa con propiedades nombre y color, y un método volar() que use this para referirse a las propiedades de lainstancia. 2. Crea una instancia de la clase y llama al método.

class Mariposa {
    nombre: string;
    color: string;

    constructor(nombre: string, color: string) {
        this.nombre = nombre;
        this.color = color;
    }

    volar(): void {
        console.log(`La mariposa ${this.nombre} de color ${this.color} está volando.`);
    }
}

const miMariposa = new Mariposa("Monarca", "naranja y negra");
miMariposa.volar();