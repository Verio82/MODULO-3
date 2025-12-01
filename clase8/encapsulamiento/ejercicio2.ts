//Crea una clase Empleado que contenga propiedades privadas para nombre, salario, y departamento. Implementa métodos para cambiar el salario (que no puede ser menor a 0) y obtener la información del empleado. Si se intenta establecer un salario negativo, imprime un mensaje indicativo. 

export class Empleado {
    //propiedades privadas
    private nombre: string;
    private salario: number;
    private departamento: string;

    //constructor
    constructor(nombre: string, salario: number, departamento: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    }


    //metodo para cambiar salario

    public cambiarSalario(nuevoSalario: number): void {
        if (nuevoSalario < 0) {
            console.log("El salario no puede ser menor a 0.");
            return;
        } else {
            this.salario = nuevoSalario;
            console.log(`El salario de ${this.nombre} ha sido actualizado a ${this.salario}.`);
        }
    }

    //metodo para obtener informacion del empleado
    public obtenerInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`);
    }

}

//Ejemplo de uso
const empleado = new Empleado("Juan Perez", 3000, "Ventas");
empleado.obtenerInformacion();
empleado.cambiarSalario(3500);
empleado.obtenerInformacion();
empleado.cambiarSalario(-500); // intento de establecer salario negativo