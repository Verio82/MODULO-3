//Importamos express
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Arreglo inicial de usuarios
const users = [
  { id: 1, name: 'Ana', email: 'ana@mail.com', age: 25 },
  { id: 2, name: 'Juan', email: 'juan@mail.com', age: 32 },
  { id: 3, name: 'Laura', email: 'laura@mail.com', age: 19 }
];

// PUT /users/:id → actualizar usuario
app.put('/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const { name, email } = req.body;

  // Validar datos incompletos
  if (!name || !email) {
    return res.status(400).json({
      message: 'Datos incompletos: name y email son obligatorios'
    });
  }

  // Buscar usuario
  const userIndex = users.findIndex(user => user.id === userId);

  // Usuario no encontrado
  if (userIndex === -1) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    });
  }

  // Actualizar usuario
  users[userIndex] = {
    id: userId,
    name,
    email
  };

  res.json(users[userIndex]);
});

//Ejercicio 2
app.delete('/users/:id', (req, res) => {
  const userId = Number(req.params.id);

  // Buscar usuario
  const userIndex = users.findIndex(user => user.id === userId);

  // Usuario no encontrado
  if (userIndex === -1) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    });
  }

  // Eliminar usuario
  users.splice(userIndex, 1);

  res.json({
    message: 'Usuario eliminado correctamente'
  });
});

//Ejercicio 3
app.get('/users', (req, res) => {
  const { name } = req.query;

  // Si no se envía name, devolver todos
  if (!name) {
    return res.json(users);
  }

  // Filtrado parcial (no sensible a mayúsculas)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredUsers);
});

//Ejercicio 4
app.get('/users/count', (req, res) => {
  const { domain } = req.query;

  // Validar que exista el parámetro
  if (!domain) {
    return res.status(400).json({
      message: 'El parámetro domain es obligatorio'
    });
  }

  // Contar usuarios cuyo email termina con el dominio
  const count = users.filter(user =>
    user.email.toLowerCase().endsWith(domain.toLowerCase())
  ).length;

  res.json({
    domain,
    count
  });
});

//Ejercicio 5

app.post('/users/bulk', (req, res) => {
  const newUsers = req.body;

  // Validar que sea un arreglo
  if (!Array.isArray(newUsers)) {
    return res.status(400).json({
      message: 'El cuerpo de la solicitud debe ser un arreglo de usuarios'
    });
  }

  // Validar cada usuario
  for (let i = 0; i < newUsers.length; i++) {
    const { name, email } = newUsers[i];

    if (!name || !email) {
      return res.status(400).json({
        message: 'Usuario inválido',
        index: i,
        user: newUsers[i]
      });
    }
  }

  // Agregar usuarios (generando IDs)
  newUsers.forEach(user => {
    const newId =
      users.length > 0 ? users[users.length - 1].id + 1 : 1;

    users.push({
      id: newId,
      name: user.name,
      email: user.email
    });
  });

  res.status(201).json(users);
});

//Ejercicio 6

app.get('/users/sorted', (req, res) => {
  const { order } = req.query;

  // Copia del array para no modificar el original
  const sortedUsers = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Orden descendente si order=desc
  if (order === 'desc') {
    sortedUsers.reverse();
  }

  res.json(sortedUsers);
});

//Ejercicio 7

app.get('/users/by-age', (req, res) => {
  const { minAge, maxAge } = req.query;

  // Validar que existan ambos parámetros
  if (!minAge || !maxAge) {
    return res.status(400).json({
      message: 'Los parámetros minAge y maxAge son obligatorios'
    });
  }

  const min = Number(minAge);
  const max = Number(maxAge);

  // Filtrar usuarios por rango de edad
  const filteredUsers = users.filter(
    user => user.age >= min && user.age <= max
  );

  res.json(filteredUsers);
});

//Ejercicio 8

app.get('/users/stats', (req, res) => {
  const totalUsers = users.length;

  // Si no hay usuarios, evitar errores
  if (totalUsers === 0) {
    return res.json({
      totalUsers: 0,
      averageAge: 0,
      youngestUser: null,
      oldestUser: null
    });
  }

  // Calcular edad promedio
  const totalAge = users.reduce((acc, user) => acc + user.age, 0);
  const averageAge = totalAge / totalUsers;

  // Usuario más joven y más viejo
  const youngestUser = users.reduce((min, user) =>
    user.age < min.age ? user : min
  );

  const oldestUser = users.reduce((max, user) =>
    user.age > max.age ? user : max
  );

  res.json({
    totalUsers,
    averageAge,
    youngestUser,
    oldestUser
  });
});

//Ejercicio 9

app.get('/external/users', async (req, res) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener usuarios externos'
    });
  }
});

//Ejercicio 10

app.get('/external/users/search', async (req, res) => {
  const { name } = req.query;

  // Validar parámetro obligatorio
  if (!name) {
    return res.status(400).json({
      message: 'El parámetro name es obligatorio'
    });
  }

  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    // Buscar coincidencia exacta
    const user = response.data.find(
      user => user.name === name
    );

    // Usuario no encontrado
    if (!user) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Error al consultar la API externa'
    });
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});