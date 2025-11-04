//Define una clase llamada Animal con propiedades nombre y tipo, y un método hacerSonido().2. Crea una instancia de la clase Animal y llama al método.

class Animal {
    nombre: string;
    tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    hacerSonido() : void {
        console.log(`${this.nombre}, el ${this.tipo}, hace guau.`);
    }    
}

let miAnimal = new Animal("Firulais", "Perro");

//console.log(miAnimal.hacerSonido());
miAnimal.hacerSonido();