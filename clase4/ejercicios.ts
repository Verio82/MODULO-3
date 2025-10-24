//Ejercicio 1
//Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle for...in para recorrer y mostrar cada propiedad y su valor. 

export let persona = {
    nombre: "Lucia",
    edad: 28,
    ciudad: "Rosario",
}

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad as keyof typeof persona]}`);
}

 console.log(`El nombre de la persona es ${persona.nombre}, tiene ${persona.edad} años y es de ${persona.ciudad}`)

 console.log("/n------------------------------------/n");

 //Ejercicio 2
 //Crea un arreglo con al menos 5 números y usa un bucle for...of para imprimir cada número en consola. 
 
 export let numeros: number[] = [10, 25, 30, 45, 50];
 
 for (let numero of numeros) {
     console.log(numero);
 }
 
 console.log("/n------------------------------------/n");
 
 //Ejercicio 3
 //Crea una función genérica que tome un parámetro de cualquier tipo y lo devuelva. Prueba la función con diferentes tipos de datos. 
 
 function devolverValor (valor: any): any {
     return valor;
 
 }
 
 console.log(`Dato tipo texto: `, devolverValor("Hola Mundo"));  //String
 console.log(`Dato tipo numero: `, devolverValor(12345)); 
 console.log(`Dato tipo booleano: `, devolverValor(true));
 console.log("Dato tipo objeto: ", devolverValor({nombre: "Ana", edad: 22}));  
 
 console.log("/n------------------------------------/n");
 
 //Ejercicio 4
 //Declara una variable de tipo any y usa una aserción para tratarla como string, accediendo a la propiedad .length.
 
 let data: any = "Este es un texto de ejemplo";
 let longitud: number = (data as string).length;
 console.log(`La longitud del texto es: ${longitud}`);
 
 console.log("/n------------------------------------/n");
 
 //Ejercicio 5
 //Crea una variable de tipo any y haz una conversión con aserciones dobles para convertirla en un number. Muestra el resultado.
 
 let valorAny: any = "Hola mundo456";
 let valorNumber: number = Number(valorAny as string);
 console.log(`El valor convertido a number es: ${valorNumber}`);

  console.log("/n------------------------------------/n");
 
 //Ejercicio 6
 //Crea una función genérica llamada filtrarElementos que reciba un arreglo de valores mixtos (por ejemplo, number | tring | boolean). Usando un bucle for...of, filtra solo los valores que sean cadenas de texto (string). Utiliza serciones de tipo para acceder a las propiedades específicas de string.
 
 function filtrarElementos<T>(arr: T[]): string[] {
     let resultado: string[] = [];
 
     for (let elemento of arr) {
         if (typeof elemento === "string") {
             resultado.push(elemento as string);
         }
     }
     return resultado;
 } 

const valoresMixtos: (number | string | boolean)[] = [123, "hola", true, "typescript", false];
const filtrados = filtrarElementos(valoresMixtos);
console.log(filtrados); // ["HOLA", "TYPESCRIPT"]

  console.log("/n------------------------------------/n");
 
 //Ejercicio 7
 //Crea una función genérica llamada procesarObjeto que reciba un objeto genérico y: 1. Use un bucle for...in para ecorrer sus propiedades. 2. Si el valor de una propiedad es una cadena de texto (string), conviértelo a minúsculas. 3. i s un número (number), elévalo al cuadrado. 4. Si es un booleano, invierte su valor. Usa aserciones de tipo para realizar as transformaciones.
 
 function procesarObjeto<T extends {[key: string]: any}>(obj: T): T {
     
     const objetoProcesado: T = { ...obj };
     
     for (let propiedad in objetoProcesado) {
         let valor = objetoProcesado[propiedad];
         if (typeof valor === "string") {
             objetoProcesado[propiedad] = (valor as string).toLowerCase() as any;
         } else if (typeof valor === "number") {
             objetoProcesado[propiedad] = (valor as number) ** 2 as any;
         } else if (typeof valor === "boolean") {
             objetoProcesado[propiedad] = !(valor as boolean) as any;
         }
     }
     return objetoProcesado;
 }
 
 console.log(procesarObjeto({nombre: "MARIO", edad: 4, activo: true, ciudad: "BUENOS AIRES"}));