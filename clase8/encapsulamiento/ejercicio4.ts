//Diseña una clase Taller que tenga propiedades privadas para nombre, direccion, servicios (un array de objetos con nombreServicio, precio, y descripcion), y calificaciones (un array para almacenar las calificaciones de los clientes). Implementa métodos para agregar servicios, eliminar servicios, listar los servicios disponibles, agregar calificaciones y calcular el promedio de calificaciones. Si se intenta agregar un servicio con un precio negativo, imprime un mensaje informativo. También imprime un mensaje si se intenta agregar una calificación que no está entre 1 y 5. 

export class Taller {
    //propiedades privadas
    private nombre: string;
    private direccion: string;
    private servicios: { nombreServicio: string; precio: number; descripcion: string }[] = [];
    private calificaciones: number[] = [];

    //constructor
    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    //metodo para agregar servicios
    public agregarServicio(nombreServicio: string, precio: number, descripcion: string): void {
        if (precio < 0) {
            console.log("El precio del servicio no puede ser negativo.");
            return;
        } else {
            this.servicios.push({ nombreServicio, precio, descripcion });
            console.log(`Servicio "${nombreServicio}" agregado al taller "${this.nombre}".`);
        }
    }

    //metodo para eliminar servicios
    public eliminarServicio(nombreServicio: string): void {
        const index = this.servicios.findIndex(servicio => servicio.nombreServicio === nombreServicio);
        if (index === -1) {
            console.log(`El servicio "${nombreServicio}" no existe en el taller "${this.nombre}".`);
            return;
        } else {
            this.servicios.splice(index, 1);
            console.log(`Servicio "${nombreServicio}" eliminado del taller "${this.nombre}".`);
        }
    }

    //metodo para listar servicios
    public listarServicios(): void {
        console.log(`Servicios disponibles en el taller "${this.nombre}":`);
        if (this.servicios.length === 0) {
            console.log("No hay servicios disponibles.");
            return;
        }
        this.servicios.forEach((servicio, index) => {
            console.log(`${index + 1}. ${servicio.nombreServicio} - Precio: ${servicio.precio}, Descripción: ${servicio.descripcion}`);
        });
    }

    //metodo para agregar calificaciones
    public agregarCalificacion(calificacion: number): void {
        if (calificacion < 1 || calificacion > 5) {
            console.log("La calificación debe estar entre 1 y 5.");
            return;
        } else {
            this.calificaciones.push(calificacion);
            console.log(`Calificación de ${calificacion} agregada al taller "${this.nombre}".`);
        }
    }

    //metodo para calcular promedio de calificaciones
    public calcularPromedioCalificaciones(): void {
        if (this.calificaciones.length === 0) {
            console.log("No hay calificaciones para calcular el promedio.");
            return;
        }
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        const promedio = suma / this.calificaciones.length;
        console.log(`El promedio de calificaciones del taller "${this.nombre}" es: ${promedio.toFixed(2)}`);
    }

}

//Ejemplo de uso
const taller = new Taller("Taller Mecánico", "Avenida Siempre Viva 742");
taller.agregarServicio("Cambio de Aceite", 500, "Cambio de aceite y filtro.");
taller.agregarServicio("Alineación y Balanceo", 800, "Alineación y balanceo de ruedas.");
taller.agregarServicio("Revisión General", -200, "Revision"); // intento de agregar servicio con precio negativo
taller.listarServicios();
taller.eliminarServicio("Lavado de Auto"); // intento de eliminar servicio que no existe
taller.eliminarServicio("Cambio de Aceite");
taller.listarServicios();
taller.agregarCalificacion(4);
taller.agregarCalificacion(6); // intento de agregar calificación inválida
taller.agregarCalificacion(5);
taller.calcularPromedioCalificaciones();