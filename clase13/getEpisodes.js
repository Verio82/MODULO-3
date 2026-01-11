//ejercicio 6

async function getEpisodes(seriesName) {
    try {
        const response = await fetch(
            `https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(seriesName)}&embed=episodes`
        );

        if (!response.ok) {
            throw new Error("Serie no encontrada");
        }

        const data = await response.json();

        const episodes = data._embedded.episodes;

        episodes.forEach(episode => {
            console.log(
                `Temporada ${episode.season} - Episodio: ${episode.name}`
            );
        });

    } catch (error) {
        console.error("Error al obtener los episodios:", error.message);
    }
}

getEpisodes("Friends");