//Declara dos variables, una para almacenar un nombre y otra para almacenar una edad. Si la edad no se asigna, debes imprimir un mensaje que diga "Edad no proporcionada". Si se asigna la edad, imprímela junto al nombre.

//Declaración de variables
let nombre1: string = "Vero Muzzio";
let edad1: number | undefined; // La edad puede ser un número o undefined

//Verificación y impresión de valores
if (edad1 === undefined) {
    console.log("Edad no proporcionada");
} else {
    console.log(`Nombre: ${nombre1}, Edad: ${edad1}`);
};
