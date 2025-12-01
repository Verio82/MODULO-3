//Crea una función que simule un proceso de recuperación de contraseña en el cual se envía un correo electrónico al usuario. Esta función debe tardar 3 segundos en completarse y retornar un mensaje confirmando que el correo de recuperación ha sido enviado. Especificaciones: • La función debe llamarse recuperarContrasena y recibir como parámetro el correo electrónico del usuario. • Después de un retardo de 3 segundos, debe retornar el mensaje "Correo de recuperación enviado a [correo]". • En una función iniciarRecuperacion, llama a recuperarContrasena e imprime el mensaje cuando se complete la operación. Este ejercicio muestra cómo se manejan operaciones asíncronas en procesos de recuperación de contraseñas, una funcionalidad común en aplicaciones web.

function recuperarContrasena(correo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Correo de recuperación enviado a ${correo}`);
        }, 3000);
    });

}

async function iniciarRecuperacion(correo) {
    console.log('Iniciando proceso de recuperación de contraseña...');
    const resultado = await recuperarContrasena(correo);
    console.log(resultado);
    console.log('Proceso de recuperación finalizado.');
}

// Ejecutamos la función con un correo de prueba
iniciarRecuperacion('vero@email.com');