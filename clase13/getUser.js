//ejercicio 5

async function getUser(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error("Usuario no encontrado");
        }

        const user = await response.json();

        const nombre = user.name;
        const username = user.username;
        const email = user.email;

        console.log(
            `Nombre: ${nombre}\nUsuario: ${username}\nEmail: ${email}`
        );
    } catch (error) {
        console.error("Error al obtener el usuario:", error.message);
    }
}

getUser(1);