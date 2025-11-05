//Implementa una clase abstracta DispositivoElectronico con métodos abstractos encender y apagar. Crea dos clases concretas Televisor y Radio, que sobrescriban estos métodos. 

abstract class DispositivoElectronico {
    abstract encender(): void;
    abstract apagar(): void;
}
class Televisor extends DispositivoElectronico {
    encender(): void {  
        console.log("El televisor está encendido.");
    }
    apagar(): void {
        console.log("El televisor está apagado.");
    }
}

class Radio extends DispositivoElectronico {
    encender(): void {
        console.log("La radio está encendida.");
    }
    apagar(): void {
        console.log("La radio está apagada.");
    }
}

const miTelevisor = new Televisor();
miTelevisor.encender();
// Salida: El televisor está encendido.
miTelevisor.apagar();
// Salida: El televisor está apagado.
const miRadio = new Radio();
miRadio.encender();
// Salida: La radio está encendida.
miRadio.apagar();
// Salida: La radio está apagada.
