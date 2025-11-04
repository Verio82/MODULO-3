//Crea dos interfaces: Volador con el método volar() y Transportable con el método transportar(). Luego crea una clase Avion que implemente ambas interfaces y sobrescriba los métodos.

interface Volador {
    volar(): void;
}

interface Transportable {
    transportar(): void;
}

class Avion implements Volador, Transportable {
    volar(): void {
        console.log("El avión está volando por el cielo.");
    }
    transportar(): void {
        console.log("El avión está transportando pasajeros y carga.");
    }
}

const miAvion = new Avion();
miAvion.volar();
miAvion.transportar();
// Salida:
// El avión está volando por el cielo.
// El avión está transportando pasajeros y carga.