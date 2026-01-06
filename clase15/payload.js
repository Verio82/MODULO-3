//Importamos el modulo jsonwebtoken
//import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');

//Declaramos nuestra clave
const secretKey = "mi_clave_super_secreta";

//Definimos el payload
const payload = {
  userId: 123,
  role: "admin",
  name: "Vero",
  iat: Math.floor(Date.now() / 1000), // fecha actual en segundos
  exp: Math.floor(Date.now() / 1000) + (60 * 60) // expira en 1 hora
};

//Creamos el JWT
const token = jwt.sign(payload, secretKey, {algorithm : 'HS256'});
console.log("\nToken JWT generado correctamente:", token);

//Decodificamos la info del payload y verificamos el token
try {
  const decoded = jwt.verify(token, secretKey);
  console.log(`\nPayload decodificado: `, decoded);
} catch (err) {
  console.error("Token inválido o expirado", error.message);
}
  