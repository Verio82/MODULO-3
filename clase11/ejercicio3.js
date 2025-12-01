//Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea. Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). Luego, crea una función que ejecute estas tres consultas en paralelo usando Promise.all, de modo que se esperen los tres resultados antes de continuar. Esta técnica te permitirá comprender cómo hacer más eficientes las operaciones asíncronas independientes ejecutándolas en paralelo.

function consulta1() {
    return new Promise(resolve => setTimeout(() => resolve('Consulta 1 completada'), 1000));
}

function consulta2() {
    return new Promise(resolve => setTimeout(() => resolve('Consulta 2 completada'), 2000));
}

function consulta3() {
    return new Promise(resolve => setTimeout(() => resolve('Consulta 3 completada'), 3000));
}

async function ejecutarConsultasEnParalelo() {
    try {
        const promesa1 = consulta1();
        const promesa2 = consulta2();
        const promesa3 = consulta3();

        const resultados = await Promise.all([promesa1, promesa2, promesa3]);
        console.log("Resultados de las consultas: ", resultados);
    } catch (error) {
        console.error("Error en alguna de las consultas: ", error);
    }
}

//Llamamos a la funcion principal
ejecutarConsultasEnParalelo();