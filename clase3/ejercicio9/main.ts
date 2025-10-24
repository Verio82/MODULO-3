// importa el tipo y la función, crea una persona y muestra su información en la consola. 

import { Person, createPerson } from './types';

const person: Person = createPerson('Juan', 30);
console.log(`Nombre: ${person.name}, Edad: ${person.age}`); 

