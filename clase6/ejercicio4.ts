//Define una clase base Flor con el método describir(), que imprime un mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, cada una sobrescribiendo el método describir() con un mensaje específico. 

class Flor {
    describir(): void {
        console.log("Esta es una flor hermosa.");
    }
}

class Rosa extends Flor {
    describir(): void {
        console.log("Esta es una rosa, símbolo de amor y belleza.");
    }
}

class Girasol extends Flor {
    describir(): void {
        console.log("Este es un girasol, conocido por seguir al sol.");
    }
}

const miRosa = new Rosa();
miRosa.describir();    
// Salida: Esta es una rosa, símbolo de amor y belleza. 
const miGirasol = new Girasol();
miGirasol.describir();    
// Salida: Este es un girasol, conocido por seguir al sol.