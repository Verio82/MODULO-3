//Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, y devuelva el nombre, capital y región del país. 3. Muestra estos datos en la consola. 

async function getCountry(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await response.json();
    const country = [0]
    const nombre = country.name.common
    const capital = country.capital
    const region = country.region

    console.log(`Nombre: ${nombre}/n Capital: ${capital} /nRegion: ${region}`);
    
}

catch(err) {
    console.error(err)
}

getCountry("Argentina")