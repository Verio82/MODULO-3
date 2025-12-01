//Crea una clase CuentaBancaria que tenga atributos privados como saldo y un método público para consultar el saldo y otro para depositar dinero. 

export class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // metodo para consultar saldo
    public consultarSaldo(): number {
        return this.saldo;
    }

    // metodo para depositar dinero
    public depositarDinero(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso de ${monto}. Nuevo saldo: ${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor que cero.");
        }
    }

}

//Ejemplo de uso
const cuenta = new CuentaBancaria(1000);
console.log(`Saldo inicial: ${cuenta.consultarSaldo()}`);
cuenta.depositarDinero(500);
console.log(`Saldo después del depósito: ${cuenta.consultarSaldo()}`);
cuenta.depositarDinero(-200);
