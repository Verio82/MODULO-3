//Crea un namespace llamado Geometry que contenga las siguientes funciones: • areaOfCircle(radius: number): number: devuelve el área de un círculo. • areaOfSquare(side: number): number: devuelve el área de un cuadrado. Exporta ambas funciones.

export namespace Geometry {
    export function areaOfCircle(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function areaOfSquare(side: number): number {
        return side * side;
    }

}