// importa todo desde index.ts y utiliza al menos una función de cada módulo, mostrando el resultado en la consola.

import * as Utils from './index';

const numero: number = 5;

const suma: number = Utils.add(numero, 10);
console.log(`Suma de ${numero} + 10 = ${suma}`);

const resta: number = Utils.subtract(numero, 3);
console.log(`Resta de ${numero} - 3 = ${resta}`);

const texto: string = "typescript";

const textoCapitalizado: string = Utils.capitalize(texto);
console.log(`Texto capitalizado: ${textoCapitalizado}`);
