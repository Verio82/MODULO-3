//Crea una función llamada crearLibro que acepte tres parámetros: titulo (string), autor (string) y paginas (number). La función debe devolver un objeto con esas propiedades. Luego, crea dos libros utilizando la función y muestra sus detalles en la consola. 

function crearLibro(titulo: string, autor: string, paginas: number): { titulo: string; autor: string; paginas: number } {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas
    };
}

const libro1 = crearLibro("Cien Años de Soledad", "Gabriel García Márquez", 417);
const libro2 = crearLibro("1984", "George Orwell", 328);

console.log("Detalles del Libro 1:", libro1);
console.log("Detalles del Libro 2:", libro2);
