//Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz en clases Programador y Disenador, donde cada clase debe implementar el método con su propia lógica. Luego, crea una función que reciba un objeto de tipo Empleado y llame a su método trabajar. 

interface Empleado {
    trabajar(): void;
}
class Programador implements Empleado {
    trabajar(): void {
        console.log("El programador está escribiendo código.");
    }
}

class Disenador implements Empleado {
    trabajar(): void {
        console.log("El diseñador está creando diseños gráficos.");
    }
}

function realizarTrabajo(empleado: Empleado): void {
    empleado.trabajar();
}

const programador = new Programador();
realizarTrabajo(programador);
// Salida: El programador está escribiendo código.

const disenador = new Disenador();
realizarTrabajo(disenador);
// Salida: El diseñador está creando diseños gráficos.

