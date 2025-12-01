//Crea un sistema de reservas para una peluquería. Define una clase Servicio con atributos comunes como nombre, duracion, y precio. Luego, crea clases concretas para diferentes servicios como CorteDeCabello y Manicura. Implementa una clase Cliente y una clase Reserva que asocie clientes con servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.

// clase base servicio  
export class Servicio {
    protected nombre: string;
    protected duracion: number; // en minutos
    protected precio: number;

    constructor(nombre: string, duracion: number, precio: number) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    }

    getNombre(): string {
        return this.nombre;
    }

    getDuracion(): number {
        return this.duracion;
    }

    getPrecio(): number {
        return this.precio;
    }

    descripcion(): string {
        return `Servicio: ${this.nombre}, Duracion: ${this.duracion} mins, Precio: $${this.precio}`;
    }
}

// clase corte de cabello que extiende servicio
export class CorteDeCabello extends Servicio {
    private estilo: string;

    constructor(nombre: string, duracion: number, precio: number, estilo: string) {
        super(nombre, duracion, precio);
        this.estilo = estilo;
    }

    descripcion(): string {
        return `${super.descripcion()}, Estilo: ${this.estilo}`;
    }
}

export class Manicura extends Servicio {
    private tipoManicura: string;   
    constructor(nombre: string, duracion: number, precio: number, tipoManicura: string) {
        super(nombre, duracion, precio);
        this.tipoManicura = tipoManicura;
    }
    descripcion(): string {
        return `${super.descripcion()}, Tipo de Manicura: ${this.tipoManicura}`;
    }
}

// clase cliente
export class Cliente {
    private nombre: string;
    private telefono: string;
    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre(): string {
        return this.nombre;
    }
    getTelefono(): string {
        return this.telefono;
    }
    descripcion(): string {
        return `Cliente: ${this.nombre}, Telefono: ${this.telefono}`;
    }
}

// clase reserva
export class Reserva {
    private cliente: Cliente;
    private servicio: Servicio;
    private fechaHora: Date;

    constructor(cliente: Cliente, servicio: Servicio, fechaHora: Date) {
        this.cliente = cliente;
        this.servicio = servicio;
        this.fechaHora = fechaHora;
    }
    descripcion(): string {
        return `Reserva:\n${this.cliente.descripcion()}\n${this.servicio.descripcion()}\nFecha y Hora: ${this.fechaHora}`;
    }
}

//clase gestion de reservas
export class GestionReservas {
    private reservas: Reserva[] = [];
    agregarReserva(reserva: Reserva): void {
        this.reservas.push(reserva);
    }
    listarReservas(): string {
        return this.reservas.map(reserva => reserva.descripcion()).join('\n\n');
    }
}

// Ejemplo de uso
const cliente1 = new Cliente('Ana Perez', '555-1234');
const servicio1 = new CorteDeCabello('Corte Clásico', 30, 25, 'Clásico');
const reserva1 = new Reserva(cliente1, servicio1, new Date('2024-07-01T10:00:00')); 
const gestionReservas = new GestionReservas();
gestionReservas.agregarReserva(reserva1);
console.log(gestionReservas.listarReservas());

