//Define una clase base Negocio con un método protegido operar(). Define otra clase Consultoria que herede de Negocio y sobrescriba el método operar() para mostrar un mensaje sobre cómo opera el negocio de consultoría. 

// clase base
class Negocio {
    protected operar(): void {
        console.log("El negocio está operando de manera general.");
    }
}

// clase derivada
export class Consultoria extends Negocio {
    // sobreescritura metodo clase padre
    operar(): void {
        console.log("El negocio de consultoría está operando ofreciendo asesorías especializadas.");
    }
}

//Ejemplo de uso
const consultoria = new Consultoria();
consultoria.operar();

