//Implementa una clase abstracta Empleado con un método abstracto calcularSalario. Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo, que calculen el salario de acuerdo a las horas trabajadas y salario fijo respectivamente. 

abstract class Empleado {
    // metodo abstracto para calcular salario
    abstract calcularSalario(): number;
}

class EmpleadoPorHora extends Empleado {
    private horasTrabajadas: number;
    private tarifaPorHora: number;  
    constructor(horasTrabajadas: number, tarifaPorHora: number) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    // implementar metodo calcular salario
    public calcularSalario(): number {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

class EmpleadoFijo extends Empleado {
    private salarioFijo: number;  
    constructor(salarioFijo: number) {
        super();
        this.salarioFijo = salarioFijo;
    }

    // implementar metodo calcular salario
    public calcularSalario(): number {
        return this.salarioFijo;
    }
}

//Ejemplo de uso
const empleadoHora = new EmpleadoPorHora(160, 15); // 160 horas a $15 por hora
console.log(`Salario del Empleado por Hora: $${empleadoHora.calcularSalario()}`);
