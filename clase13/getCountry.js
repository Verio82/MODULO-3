//Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, y devuelva el nombre, capital y región del país. 3. Muestra estos datos en la consola. 

async function getCountry(name) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await response.json();

        const country = data[0];

        const nombre = country.name.common;
        const capital = country.capital[0];
        const region = country.region;

        console.log(`Nombre: ${nombre}\nCapital: ${capital}\nRegión: ${region}`);
    } catch (err) {
        console.error("Error al obtener el país:", err);
    }
}

getCountry("Argentina");