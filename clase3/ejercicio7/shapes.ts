//contenga las siguientes funciones: • circleArea(radius: number): number: devuelve el área de un círculo. • squareArea(side: number): number: devuelve el área de un cuadrado.

function circleArea(radius: number): number {
    return Math.PI * radius * radius;
}

function squareArea(side: number): number {
    return side * side;
}

export { circleArea, squareArea };