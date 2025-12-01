//Crea una clase Cliente que pueda asociarse a una CuentaBancaria. Crea diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales. Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP pueden retirar sin comisiones. 

import { CuentaBancaria } from "./ejercicio3";

abstract class Cliente {
    protected cuenta: CuentaBancaria;
    protected nombre: string;
    constructor(nombre: string, cuenta: CuentaBancaria) {
        this.nombre = nombre;
        this.cuenta = cuenta;
    }
    public abstract depositar(cantidad: number): void;
    public abstract retirar(cantidad: number): void;
}

class ClienteRegular extends Cliente {
    public depositar(cantidad: number): void {
        this.cuenta.depositar(cantidad);
        console.log(`Cliente Regular ${this.nombre} ha depositado ${cantidad}.`);
    }

    public retirar(cantidad: number): void {
        this.cuenta.retirar(cantidad);
        console.log(`Cliente Regular ${this.nombre} ha retirado ${cantidad}.`);
    }
}

class ClienteVIP extends Cliente {
    public depositar(cantidad: number): void {
        this.cuenta.depositar(cantidad);
        console.log(`Cliente VIP ${this.nombre} ha depositado ${cantidad}.`);
    }
    public retirar(cantidad: number): void {
        // Los clientes VIP no tienen comisiones al retirar
        this.cuenta.retirar(cantidad);
        console.log(`Cliente VIP ${this.nombre} ha retirado ${cantidad} sin comisiones.`);
    }
}

//Ejemplo de uso
const cuentaRegular = new CuentaBancaria(1000);
const clienteRegular = new ClienteRegular("Ana", cuentaRegular);
clienteRegular.depositar(200);
clienteRegular.retirar(150);
const cuentaVIP = new CuentaBancaria(5000);
const clienteVIP = new ClienteVIP("Carlos", cuentaVIP);
clienteVIP.depositar(1000);
clienteVIP.retirar(3000);