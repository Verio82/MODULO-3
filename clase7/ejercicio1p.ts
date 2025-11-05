//Implementa una clase Calculadora que tenga un método sumar. El método debe estar sobrecargado para permitir la suma de: • Dos números enteros. • Tres números enteros. • Dos cadenas, concatenando las dos cadenas. 

class Calculadora {
    sumar(a: number, b: number): number;
    sumar(a: number, b: number, c: number): number;
    sumar(a: string, b: string): string;
    sumar(a: any, b: any, c?: any): any {
        if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
            return a + b + c;
        } else if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
    }
}

const calculadora = new Calculadora();

console.log(calculadora.sumar(5, 10)); // Suma de dos números enteros
console.log(calculadora.sumar(5, 10, 15)); // Suma de tres números enteros
console.log(calculadora.sumar("Hola, ", "mundo!")); // Concatenación de dos cadenas

