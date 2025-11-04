//Modela un sistema de cafetería. Crea una interfaz Bebida que defina un método preparar(). Implementa esta interfaz en dos clases: Cafe y Te. Usa abstracción para que ambas bebidas oculten su lógica de preparación interna pero expongan un comportamiento común.

interface Bebida {
    preparar(): void;
}

class Cafe implements Bebida {
    preparar(): void {
        console.log("Preparando café: moliendo granos, calentando agua y sirviendo.");
    }
}

class Te implements Bebida {
    preparar(): void {
        console.log("Preparando té: calentando agua, infusionando hojas de té y sirviendo.");
    }
}

const miCafe = new Cafe();
miCafe.preparar();
// Salida: Preparando café: moliendo granos, calentando agua y sirviendo.
const miTe = new Te();
miTe.preparar();
// Salida: Preparando té: calentando agua, infusionando hojas de té y sirviendo.
