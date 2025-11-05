//Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. Implementa métodos para prestar y devolver el libro, asegurando que solo se pueda prestar si está disponible y que se pueda devolver solo si ha sido prestado. Imprime un mensaje en caso de que se intente realizar una acción no válida. 

class Book {
    private titulo: string;
    private autor: string;
    private anioPublicacion: number;
    private disponible: boolean;
    constructor(titulo: string, autor: string, anioPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
        this.disponible = true; // Inicialmente, el libro está disponible
    }
    prestar(): void {
        if (this.disponible) {
            this.disponible = false;
            console.log(`Has prestado el libro "${this.titulo}".`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible para prestar.`);
        }
    }
    devolver(): void {
        if (!this.disponible) {
            this.disponible = true;
            console.log(`Has devuelto el libro "${this.titulo}".`);
        } else {
            console.log(`El libro "${this.titulo}" no ha sido prestado.`);
        }
    }
}

const myBook = new Book("Cien Años de Soledad", "Gabriel García Márquez", 1967);
myBook.prestar();
myBook.prestar(); // Intento de prestar nuevamente
myBook.devolver();
myBook.devolver(); // Intento de devolver nuevamente
// Salida:
// Has prestado el libro "Cien Años de Soledad".
// El libro "Cien Años de Soledad" no está disponible para prestar.
// Has devuelto el libro "Cien Años de Soledad".
// El libro "Cien Años de Soledad" no ha sido prestado.