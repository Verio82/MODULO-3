//Crea una clase abstracta InstrumentoMusical con un método tocar. Crea dos clases derivadas Guitarra y Piano, que sobrescriban este método para tocar el instrumento de manera diferente. Además, agrega una sobrecarga del método tocar en la clase base para permitir tocar con o sin acompañamiento. 

abstract class InstrumentoMusical {
    // metodo abstracto tocar sin acompañamiento
    abstract tocar(): void;
    // metodo abstracto tocar con acompañamiento
    abstract tocar(acompanamiento: string): void;
}

class Guitarra extends InstrumentoMusical {
    // implementar metodo tocar sin acompañamiento
    public tocar(): void;
    // implementar metodo tocar con acompañamiento
    public tocar(acompanamiento: string): void;
    public tocar(acompanamiento?: string): void {
        if (acompanamiento) {
            console.log(`La guitarra está tocando con acompañamiento de ${acompanamiento}.`);
        } else {
            console.log("La guitarra está tocando una melodía solo.");
        }
    }
}

class Piano extends InstrumentoMusical {
    // implementar metodo tocar sin acompañamiento
    public tocar(): void;
    // implementar metodo tocar con acompañamiento
    public tocar(acompanamiento: string): void;
    public tocar(acompanamiento?: string): void {
        if (acompanamiento) {
            console.log(`El piano está tocando con acompañamiento de ${acompanamiento}.`);
        } else {
            console.log("El piano está tocando una melodía solo.");
        }
    }
}

//Ejemplo de uso
const miGuitarra = new Guitarra();
miGuitarra.tocar();
miGuitarra.tocar("batería");
const miPiano = new Piano();
miPiano.tocar();
miPiano.tocar("violines");
