//1. Crea un archivo index.js. 2. Usando el método fetch en Node.js, realiza una solicitud a la API de Rick and Morty. 3. Extrae el nombre del primer personaje de la respuesta y muéstralo en la consola. Pistas: • Usa fetch(url) para hacer la solicitud y .then(response => response.json()) para procesar el JSON. • Accede a results[0].name para obtener el nombre del primer personaje. 

const url = 'https://rickandmortyapi.com/api/character/'

fetch(url)
.then(res => res.json())
.then(data => {
    console.log("Primer personaje: ", data.results[1].name);
    
})

.catch(error => 
    console.error('Error: ${error}')
)