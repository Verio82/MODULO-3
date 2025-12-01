//Crea un sistema para gestionar cuentas bancarias en un banco. Cada cuenta debe tener un nombre del propietario, un saldo y un estado (activo o inactivo). Implementa las siguientes funciones: • Añadir una cuenta. • Realizar una transferencia entre cuentas después de un retraso de 8 segundos utilizando setTimeout(). • Mostrar todas las cuentas. 

// tipo cuenta bancaria
type CuentaBancaria = [ string, number, boolean];

let cuentasBancarias: CuentaBancaria[] = [];

//funcion agregar cuenta
function agregarCuenta(cuenta: CuentaBancaria): void {
    cuentasBancarias.push(cuenta);
    console.log(`Cuenta agregada: ${cuenta[0]}, Saldo: ${cuenta[1]}, Estado: ${cuenta[2] ? "Activo" : "Inactivo"}`);
}

//funcion mostrar cuentas
function mostrarCuentas(): void {
    console.log("Cuentas bancarias:");
    cuentasBancarias.forEach((cuenta) => {
        console.log(`Propietario: ${cuenta[0]}, Saldo: ${cuenta[1]}, Estado: ${cuenta[2] ? "Activo" : "Inactivo"}`);
    });
}

//funcion realizar transferencia
function realizarTransferencia(indiceOrigen: number, indiceDestino: number, cantidad: number) {
    setTimeout(() => {
        if (cuentasBancarias[indiceOrigen] && cuentasBancarias[indiceDestino]) {
            if (cuentasBancarias[indiceOrigen][1] >= cantidad) {
                cuentasBancarias[indiceOrigen][1] -= cantidad; // Debitar
                cuentasBancarias[indiceDestino][1] += cantidad; // Acreditar
                console.log(`Transferencia de $${cantidad} de ${cuentasBancarias[indiceOrigen][0]} a ${cuentasBancarias[indiceDestino][0]} completada.`);
            } else {
                console.log("Fondos insuficientes para la transferencia.");
            }
        } else {
            console.log("Una de las cuentas no existe.");
        }
    }, 8000); // Después de 8 segundos
}

//Ejemplo de uso
agregarCuenta(["Juan Pérez", 1000, true]);
agregarCuenta(["María Gómez", 500, true]);
mostrarCuentas();
realizarTransferencia(0, 1, 200);
setTimeout(mostrarCuentas, 9000);
// La transferencia se realizará después de 8 segundos.
