//Crea una secuencia de promesas que simulen el flujo de un usuario que se registra en una plataforma y luego recibe un mensaje de bienvenida. La secuencia debe ser: 1. Registrar Usuario (promesa que tarda 2 segundos). 2. Enviar Email de Bienvenida (promesa que tarda 1 segundo). 3. Mostrar Mensaje Final al completar ambas tareas. Si alguna de las promesas falla, debe imprimirse un mensaje de error.

function registrarUsuario(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2; // Simula éxito o fallo
            if (exito) {
                resolve("Usuario registrado exitosamente.");
            } else {
                reject("Error al registrar el usuario.");
            }
        }, 2000);
    });
}

function enviarEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2; // Simula éxito o fallo
            if (exito) {
                resolve("Email de bienvenida enviado.");
            } else {
                reject("Error al enviar el email de bienvenida.");
            }
        }, 1000);
});
}

registrarUsuario()
.then((mensajeRegistro) => {
    console.log(mensajeRegistro);
    return enviarEmail();
})
.then((mensajeEmail) => {
    console.log(mensajeEmail);
    console.log("¡Proceso completado con éxito!");
})
.catch((error) => {
    console.log(`Error: ${error}`);
});
