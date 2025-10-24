// Crea una función llamada listarLibros que acepte un array de objetos libro, donde cada libro tiene las propiedades titulo (string) y autor (string). La función debe recorrer el array y mostrar los detalles de cada libro en la consola.

function listarLibros(Libro: { titulo: string; autor: string }[]): void {
    Libro.forEach((libro) => {
        console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}

const libros = [
    { titulo: "El Quijote", autor: "Miguel de Cervantes" },
    { titulo: "La Odisea", autor: "Homero" },
    { titulo: "Hamlet", autor: "William Shakespeare" }
];
listarLibros(libros);
