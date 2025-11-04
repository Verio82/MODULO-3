//Crea una interfaz Usuario que tenga las propiedades: • nombre (obligatoria). • edad (opcional). • readonly id (solo lectura). Implementa esta interfaz en una clase UsuarioConcreto. Luego, intenta modificar la propiedad id para mostrar cómo se aplican las restricciones de solo lectura. 

interface Usuario {
    nombre: string;
    edad?: number;
    readonly id: number;
}

class UsuarioConcreto implements Usuario {
    nombre: string;
    edad?: number;
    readonly id: number;
    constructor(nombre: string, id: number, edad?: number) {
        this.nombre = nombre;
        this.id = id;   
        if (edad) {
            this.edad = edad;
        }
    }
}

const usuario = new UsuarioConcreto("Ana", 1, 30);
console.log(`Nombre: ${usuario.nombre}, ID: ${usuario.id}, Edad: ${usuario.edad}`);
// Salida: Nombre: Ana, ID: 1, Edad: 30
// Intentando modificar la propiedad id (esto causará un error de compilación)
//usuario.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// Descomenta la línea anterior para ver el error de compilación.