// importa createMultiplier, crea un multiplicador (por ejemplo, para multiplicar por 2) y utiliza la función devuelta para multiplicar un número y mostrar el resultado en la consola.

import createMultiplier from './higherOrderFunctions';

const multiplyBy2 = createMultiplier(2);
const result = multiplyBy2(5);

console.log(`Resultado de multiplicar 5 por 2: `, result);
