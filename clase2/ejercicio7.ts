//Crea una función llamada aumentarSalario que acepte un objeto empleado con las propiedades nombre (string) y salario (number), y un número que represente el porcentaje de aumento. La función debe aumentar el salario del empleado y devolver el nuevo salario. Muestra en la consola el resultado. 

function aumentarSalario(empleado: { nombre: string; salario: number }, porcentajeAumento: number): number {
    empleado.salario += empleado.salario * (porcentajeAumento / 100);
    return empleado.salario;
}

const empleado = { nombre: "Pedro", salario: 50000 };
const nuevoSalario = aumentarSalario(empleado, 10);
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`);
