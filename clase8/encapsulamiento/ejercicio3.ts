//Diseña una clase Playlist que contenga propiedades privadas para nombre y canciones (un array de títulos de canciones). Implementa métodos para agregar canciones, eliminar canciones y listar todas las canciones en la playlist. Asegúrate de que se imprima un mensaje si se intenta agregar una canción vacía o eliminar una canción que no existe. 

export class Playlist {
    //propiedades privadas
    private nombre: string;
    private canciones: string[] = [];

    //constructor
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //metodo para agregar canciones
    public agregarCancion(titulo: string): void {
        if (titulo.trim() === "") {
            console.log("No se puede agregar una canción vacía.");
            return;
        } else {
            this.canciones.push(titulo);
            console.log(`Canción "${titulo}" agregada a la playlist "${this.nombre}".`);
        }
    }

    //metodo para eliminar canciones
    public eliminarCancion(titulo: string): void {
        const index = this.canciones.indexOf(titulo);
        if (index === -1) {
            console.log(`La canción "${titulo}" no existe en la playlist "${this.nombre}".`);
            return;
        } else {
            this.canciones.splice(index, 1);
            console.log(`Canción "${titulo}" eliminada de la playlist "${this.nombre}".`);
        }
    }

    //metodo para listar canciones
    public listarCanciones(): void {
        console.log(`Playlist: ${this.nombre}`);
        if (this.canciones.length === 0) {
            console.log("No hay canciones en la playlist.");
            return;
        }
        this.canciones.forEach((cancion, index) => {
            console.log(`${index + 1}. ${cancion}`);
        });
    }
}

//Ejemplo de uso
const miPlaylist = new Playlist("Mis Favoritas");
miPlaylist.agregarCancion("Song 1");
miPlaylist.agregarCancion("Song 2");
miPlaylist.agregarCancion(""); // intento de agregar canción vacía
miPlaylist.listarCanciones();
miPlaylist.eliminarCancion("Song 3"); // intento de eliminar canción que no existe
miPlaylist.eliminarCancion("Song 1");
miPlaylist.listarCanciones();