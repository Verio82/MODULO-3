//Crea una clase base Empleado con propiedades protegidas nombre y salario, y un método calcularSalario(). Crea dos clases derivadas EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Ambas clases deben sobrescribir el método calcularSalario() con sus propias lógicas (empleados de tiempo completo tienen un salario fijo, mientras que los empleados de medio tiempo cobran por hora). Además, crea una interfaz BeneficiosLaborales que tenga el método calcularBeneficios(). Solo los empleados de tiempo completo implementarán esta interfaz.

// clase base
export class Empleado {
    constructor(protected nombre: string, protected salario: number) {}
    calcularSalario(): number {
        return this.salario;
    }
}

// interfaz
export interface BeneficiosLaborales {
    calcularBeneficios(): number; // firma
}

// clases derivadas
export class EmpleadoTiempoCompleto extends Empleado implements BeneficiosLaborales {
    constructor(nombre: string, salario: number) {
        super(nombre, salario);
    }
    calcularSalario(): number {
        return this.salario; // salario fijo
    }
    calcularBeneficios(): number {
        return this.salario * 0.20; // 20% del salario como beneficios
    }
}

export class EmpleadoMedioTiempo extends Empleado {
    private horasTrabajadas: number
    private tarifaPorHora: number

    constructor(nombre: string, tarifaPorHora: number, horasTrabajadas: number) {
        super(nombre, tarifaPorHora * horasTrabajadas);
        this.tarifaPorHora = tarifaPorHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    calcularSalario(): number {
        return this.tarifaPorHora * this.horasTrabajadas; // salario por hora
    }
}

//Ejemplo de uso    
const empleadoFullTime = new EmpleadoTiempoCompleto("Juan Perez", 5000);
console.log(`Salario de ${empleadoFullTime['nombre']}: $${empleadoFullTime.calcularSalario()}`);
console.log(`Beneficios de ${empleadoFullTime['nombre']}: $${empleadoFullTime.calcularBeneficios()}`);
const empleadoPartTime = new EmpleadoMedioTiempo("Ana Gomez", 20, 80);
console.log(`Salario de ${empleadoPartTime['nombre']}: $${empleadoPartTime.calcularSalario()}`);
