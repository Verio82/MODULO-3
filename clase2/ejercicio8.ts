//Crea una función llamada calcularArea que acepte el tipo de figura ("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La función debe retornar el área de la figura. Usa tipos específicos para cada caso.



function calcularArea(figura: "circulo" | "rectangulo" , ...parametros: number[]): number {
    if (figura === "circulo") {
    const radio = parametros[0];
    if (radio === undefined) throw new Error("Falta el parámetro radio");
    return Math.PI * Math.pow(radio, 2);
  } else {
    const largo = parametros[0];
    const ancho = parametros[1];
    if (largo === undefined || ancho === undefined) throw new Error("Faltan parámetros largo o ancho");
    return largo * ancho;
  }
}

const areaCirculo = calcularArea("circulo", 5);
console.log("Área del círculo:", areaCirculo);
const areaRectangulo = calcularArea("rectangulo", 4, 6);
console.log("Área del rectángulo:", areaRectangulo);
