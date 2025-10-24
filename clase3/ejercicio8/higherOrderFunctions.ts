// contenga una función: • createMultiplier(factor: number): (num: number) => number: devuelve otra función que multiplica un número por el factor dado. Exporta esta función como exportación por defecto.

export default function createMultiplier(factor: number): (num: number) => number {
    return function(num: number): number {
        return num * factor;
    };
}