//contenga una función: • createUser(name: string, age: number): devuelve un objeto con name y age. Exporta la función como exportación por defecto.

export default function createUser(name: string, age: number): {name: string, age: number} {
    return {
        name: name,
        age: age
    };
}