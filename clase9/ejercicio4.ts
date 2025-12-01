//Implementa un sistema de gestión de amigos en una red social. Cada amigo debe tener un nombre y un estado (en línea o fuera de línea). Utiliza un setInterval() para verificar el estado de los amigos cada 5 segundos y enviar una notificación si un amigo se pone en línea. 

// tipo amigo
type Amigo = {
    nombre: string;
    enLinea: boolean;
}

class GestionAmigos {
    private amigos: Amigo[] = [];
    // metodo agregar amigo
    public agregarAmigo(amigo: Amigo): void {
        this.amigos.push(amigo);
        console.log(`Amigo agregado: ${amigo.nombre}, Estado: ${amigo.enLinea ? "En línea" : "Fuera de línea"}`);
    }
    // metodo verificar estado
    public verificarEstado(): void {
        setInterval(() => {
            this.amigos.forEach((amigo) => {    
                if (amigo.enLinea) {
                    console.log(`Notificación: ${amigo.nombre} está en línea.`);
                }
            });
        }, 5000); // 5 segundos
    }

    // metodo mostrar amigos
    public mostrarAmigos(): void {
        console.log("Lista de amigos:");
        this.amigos.forEach((amigo) => {
            console.log(`Nombre: ${amigo.nombre}, Estado: ${amigo.enLinea ? "En línea" : "Fuera de línea"}`);
        });
    }
}

//Ejemplo de uso
const gestionAmigos = new GestionAmigos();
gestionAmigos.agregarAmigo({ nombre: "Pedro", enLinea: false });
gestionAmigos.agregarAmigo({ nombre: "Lucía", enLinea: true });
gestionAmigos.mostrarAmigos();
gestionAmigos.verificarEstado();
// El setInterval seguirá ejecutándose cada 5 segundos para verificar el estado de los amigos.
