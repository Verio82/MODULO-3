//Diseña un sistema de transporte público. Define: arBateria(). • Una clase abstracta Transporte con el método abstracto mover(). Implementa ambas estructuras en una clase concreta AutobusElectrico.

abstract class Transporte {
    abstract mover(): void;
}

class AutobusElectrico extends Transporte {
    mover(): void {
        console.log("El autobús eléctrico se está moviendo silenciosamente.");
    }

    arBateria(): void {
        console.log("La batería del autobús eléctrico está siendo cargada.");
    }
}

const miAutobus = new AutobusElectrico();
miAutobus.mover();
miAutobus.arBateria();
// Salida:
// El autobús eléctrico se está moviendo silenciosamente.
// La batería del autobús eléctrico está siendo cargada.