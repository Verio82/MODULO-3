async function searchSong(title) {
    try {
        const response = await fetch(
            `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&limit=1`
        );
        const data = await response.json();

        if (data.results.length === 0) {
            console.log("No se encontró la canción");
            return;
        }

        const song = data.results[0];

        const nombreCancion = song.trackName;
        const artista = song.artistName;

        console.log(`Canción: ${nombreCancion}\nArtista: ${artista}`);
    } catch (error) {
        console.error("Error al buscar la canción:", error);
    }
}

searchSong("Imagine");