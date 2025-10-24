// importa lo necesario desde utils/index.ts y utiliza las funciones en un solo flujo de trabajo, mostrando todos los resultados en la consola.

import { add, capitalize, User } from './utils';

const sum = add(5, 10);
console.log(`Suma: ${sum}`);

const capitalizedString = capitalize('hola mundo');
console.log(`Cadena capitalizada: ${capitalizedString}`);

const user = User('Ana', 25);
console.log(`Usuario: Nombre - ${user.name}, Edad - ${user.age}`);
