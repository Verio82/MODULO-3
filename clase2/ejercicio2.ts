//Define una función llamada saludar que acepte un parámetro nombre de tipo string y otro opcional saludo de tipo string. Si el parámetro saludo no es proporcionado, la función debe usar "Hola" por defecto. Retorna el saludo y muestra el resultado en la consola. 

function saludar(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}!`;
}

const mensaje = saludar("Carlos");
console.log(mensaje);
const mensajePersonalizado = saludar("Ana", "Buenos días");
console.log(mensajePersonalizado);
