//Define un objeto que represente un libro con las siguientes propiedades:título, autor, y año de publicación.2. Crea una instancia de ese objeto y muestra sus propiedades en la consola.

class Libro{
    titulo: string;
    autor: string;
    anioPublicacion: number;
    constructor(titulo: string, autor: string, anioPublicacion: number){
        this.titulo = titulo;
        this.autor = autor;
        this.anioPublicacion = anioPublicacion;
    }
    descripcion(): string {
        return `${this.titulo} es un libro escrito por ${this.autor} y fue publicado en el año ${this.anioPublicacion}.`;
    } 
}

const miLibro = new Libro ("Cien años de soledad", "Gabriel Garcia Marquez", 1967)   


console.log(miLibro.descripcion());


//Ejercicio 2
//Modifica el objeto del ejercicio anterior para que incluya un método llamado descripcion() que devuelva una descripción del libro.2. Llama al método y muestra el resultado en la consola.

