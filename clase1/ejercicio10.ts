//Declara un objeto en TypeScript con propiedades de tipo string, number y boolean. Accede a estas propiedades e imprímelas en la consola. 

//Declaración del objeto con propiedades de diferentes tipos
let persona: { nombre: string; edad: number; esEstudiante: boolean } = {
    nombre: "Vero Muzzio",
    edad: 43,
    esEstudiante: true
};

//Acceso e impresión de las propiedades del objeto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("¿Es estudiante?:", persona.esEstudiante);
