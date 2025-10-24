// importa createUser, crea un usuario y muestra su información en la consola. 

import createUser from './user';

const usuario = createUser("Juan", 28);
console.log(`Usuario creado: Nombre - ${usuario.name}, Edad - ${usuario.age}`);

