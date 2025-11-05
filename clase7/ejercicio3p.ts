//Crea una clase Banco con un saldo inicial privado. El saldo solo puede ser modificado a través de un método depositar y otro retirar, los cuales deben validar que la cantidad no sea negativa. Implementa métodos públicos para consultar el saldo. 

class Banco {
    private saldo: number;
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }   
    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito exitoso: $${cantidad}. Nuevo saldo: $${this.saldo}.`);
        } else {
            console.log("Error: La cantidad a depositar no puede ser negativa.");
        }
    }

    public retirar(cantidad: number): void {
        if (cantidad > 0) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
                console.log(`Retiro exitoso: $${cantidad}. Nuevo saldo: $${this.saldo}.`);
            }
            else {
                console.log("Error: Fondos insuficientes para el retiro.");
            }
        } else {
            console.log("Error: La cantidad a retirar no puede ser negativa.");
        }
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}

const miBanco = new Banco(1000);
miBanco.depositar(500);
miBanco.retirar(200);

