//Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, pero protege el saldo para que solo pueda ser modificado dentro de la clase. Crea una subclase CuentaAhorros que agregue interés al saldo. 

export class CuentaBancaria {
    // propiedad protegida saldo
    protected saldo: number;
    // constructor
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }
    // metodo para depositar dinero
    public depositar(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a depositar debe ser mayor a 0.");
            return;
        }
        this.saldo += cantidad;
        console.log(`Se han depositado ${cantidad}. Saldo actual: ${this.saldo}`);
    }
    // metodo para retirar dinero
    public retirar(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor a 0.");
            return;
        }
        if (cantidad > this.saldo) {
            console.log("Fondos insuficientes para retirar la cantidad solicitada.");
            return;
        }
        this.saldo -= cantidad;
        console.log(`Se han retirado ${cantidad}. Saldo actual: ${this.saldo}`);
    }
    // metodo para obtener saldo
    public obtenerSaldo(): number {
        return this.saldo;
    }
}

export class CuentaAhorros extends CuentaBancaria {
    private tasaInteres: number; // en porcentaje
    // constructor
    constructor(saldoInicial: number, tasaInteres: number) {    
        super(saldoInicial);
        this.tasaInteres = tasaInteres;
    }
    // metodo para agregar interes
    public agregarInteres(): void {
        const interes = this.saldo * (this.tasaInteres / 100);
        this.saldo += interes;
        console.log(`Se han agregado ${interes} de interés. Saldo actual: ${this.saldo}`);
    }
}

//Ejemplo de uso
const cuenta = new CuentaBancaria(1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log(`Saldo final: ${cuenta.obtenerSaldo()}`);
const cuentaAhorros = new CuentaAhorros(2000, 5);
cuentaAhorros.agregarInteres();
cuentaAhorros.depositar(300);
cuentaAhorros.retirar(100);
console.log(`Saldo final de la cuenta de ahorros: ${cuentaAhorros.obtenerSaldo()}`);