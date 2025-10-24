//crea dos funciones: • capitalize(str: string): string: devuelve el string con la primera letra en mayúscula. • reverse(str: string): string: devuelve el string al revés. Exporta ambas funciones como exportaciones nombradas.

export function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str: string): string {
    return str.split('').reverse().join('');
}
