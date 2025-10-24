//importa las funciones y utilízalas con una cadena de texto, mostrando el resultado en la consola. 

import { capitalize, reverse } from './stringUtils';

const texto: string = "hola mundo";

const textoCapitalizado: string = capitalize(texto);
console.log(`Texto capitalizado: ${textoCapitalizado}`);

const textoInvertido: string = reverse(texto);
console.log(`Texto invertido: ${textoInvertido}`);

