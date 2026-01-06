//Crea un archivo getPokemon.js. 2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener información sobre el Pokémon "Bulbasaur". 3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la consola. 

const url ='https://pokeapi.co/api/v2/pokemon/1'

fetch(url)
.then(res => res.json())
.then( data => {
    const name = data.name
    const types = data.types.map(t => t.type.name)
    console.log(`Nombre: ${name}/n Tipo: ${types}`);

})
