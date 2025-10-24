//Usa un tipo literal para declarar una variable que solo acepte uno de los valores: "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en TypeScript. 

//Declaración de variable con tipo literal
let dia: "Lunes" | "Martes" | "Miércoles";

//Asignación de un valor válido
dia = "Lunes";
console.log("Día asignado:", dia);

//Intento de asignar un valor inválido (descomenta la línea siguiente para ver el error)
//dia = "Jueves"; // Error: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miércoles"'.
//console.log("Día asignado:", dia);

//Asignación de otro valor válido
dia = "Martes";
console.log("Día asignado:", dia);