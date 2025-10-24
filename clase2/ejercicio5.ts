// Crea una función llamada sumarTodos que acepte una cantidad indefinida de números y devuelva su suma. Luego, llama a la función con varios números y muestra el resultado en la consola.

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}   

const suma = sumarTodos(1, 2, 3, 4, 5);
console.log("La suma de todos los números es:", suma);
