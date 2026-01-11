//ejercicio 7

async function searchRepo(query) {
    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=5`
        );

        if (!response.ok) {
            throw new Error("Error al buscar repositorios");
        }

        const data = await response.json();

        data.items.forEach(repo => {
            console.log(
                `Repositorio: ${repo.full_name}\nDescripción: ${repo.description}\n`
            );
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
}

searchRepo("javascript");