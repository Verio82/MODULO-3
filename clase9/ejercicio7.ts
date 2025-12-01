//Crea una función genérica que acepte una tupla con dos elementos de cualquier tipo y retorne una nueva tupla con los elementos invertidos. Para este ejercicio deben pensar mucho porque es para poner en juego la lógica de programacion 

function invertirTupla<T, U>(tupla: [T, U]): [U, T] {
    return [tupla[1], tupla[0]];
}

//Ejemplo de uso
const tuplaOriginal1: [number, string] = [42, "Hola"];
const tuplaInvertida1 = invertirTupla(tuplaOriginal1);
console.log(`Tupla original: ${tuplaOriginal1}, Tupla invertida: ${tuplaInvertida1}`);