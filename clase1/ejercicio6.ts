//Declara una variable de tipo unknown. Asigna diferentes tipos de valores a esta variable, y utiliza el operador typeof para verificar el tipo antes de imprimir los valores. 

//Declaración de variable con tipo unknown
let variableUnknown: unknown;

//Asignación de un valor numérico
variableUnknown = 42;

//Verificación del tipo y impresión del valor
if (typeof variableUnknown === "number") {
    console.log("El valor es un número:", variableUnknown);
} else {
    console.log("El valor no es un número.");
}
