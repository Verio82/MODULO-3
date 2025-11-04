//Crea una interfaz PagoOnline con un método procesarPago(). Crea una clase abstracta Pago con un método concreto validarMonto() y un método abstracto completarPago(). Implementa ambas estructuras en una clase concreta PagoConTarjeta.

interface PagoOnline {
    procesarPago(monto: number): void;
}

abstract class Pago {
    validarMonto(monto: number): boolean {
        return monto > 0;
    }
    abstract completarPago(monto: number): void;
}

class PagoConTarjeta extends Pago implements PagoOnline {
    procesarPago(monto: number): void {
        if (this.validarMonto(monto)) {
            this.completarPago(monto);
        } else {
            console.log("Monto inválido para el pago.");
        }
    }

    completarPago(monto: number): void {
        console.log(`Pago con tarjeta de $${monto} completado exitosamente.`);
    }
}

const pago = new PagoConTarjeta();
pago.procesarPago(150);
// Salida: Pago con tarjeta de $150 completado exitosamente.
pago.procesarPago(-50);
// Salida: Monto inválido para el pago.
