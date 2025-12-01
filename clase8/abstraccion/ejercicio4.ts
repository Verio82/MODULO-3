//Crea un sistema para gestionar libros y miembros de una biblioteca. Usa una clase abstracta Publicacion, clases concretas Libro y Revista, y una clase Biblioteca que gestione el préstamo de publicaciones. 

// clase base
export abstract class Publicacion {
    constructor(protected titulo: string, protected autor: string) {}
    abstract detalles(): void;
}

// clases concretas
export class Libro extends Publicacion {
    constructor(titulo: string, autor: string, private isbn: string) {
        super(titulo, autor);
    }
    detalles(): void {
        console.log(`Libro: ${this.titulo}, Autor: ${this.autor}, ISBN: ${this.isbn}`);
    }
}

export class Revista extends Publicacion {
    constructor(titulo: string, autor: string, private numeroEdicion: number) {
        super(titulo, autor);
    }
    detalles(): void {
        console.log(`Revista: ${this.titulo}, Autor: ${this.autor}, Edición Nº: ${this.numeroEdicion}`);
    }   
}

// clase Biblioteca
export class Biblioteca {
    private publicaciones: Publicacion[] = []; 
    constructor(private nombreBiblioteca: string) {}
    // metodo agregar publicacion
    public agregarPublicacion(publicacion: Publicacion): void {
        this.publicaciones.push(publicacion);
        console.log(`Publicación ${publicacion['titulo']} agregada a la biblioteca ${this.nombreBiblioteca}`);
    }
    // metodo listar publicaciones
    public listarPublicaciones(): void {
        console.log(`Publicaciones en la Biblioteca ${this.nombreBiblioteca}:`);
        this.publicaciones.forEach((publicacion, index) => {
            console.log(`${index + 1}.`);
            publicacion.detalles();
        });
    }
}

//Ejemplo de uso
const biblioteca = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "123-456-789");
const revista1 = new Revista("National Geographic", "Varios Autores", 202);
biblioteca.agregarPublicacion(libro1);
biblioteca.agregarPublicacion(revista1);
biblioteca.listarPublicaciones();
