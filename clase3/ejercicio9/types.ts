//contenga: • Un tipo Person con las propiedades name y age. • Una función createPerson(name: string, age: number): Person: devuelve un objeto Person. Exporta el tipo y la función como exportaciones nombradas

export type Person = {
    name: string;
    age: number;
};

export function createPerson(name: string, age: number): Person {
    return { name, age };
}
