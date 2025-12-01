//Desarrolla un sistema que gestione las pólizas de seguros de una compañía. Cada póliza debe tener un identificador, nombre del cliente, monto asegurado y una fecha de renovación. Implementa las siguientes funciones: • Añadir una póliza. • Programar la renovación de la póliza utilizando setTimeout(). • Mostrar todas las pólizas activas. 

// tipo poliza
type Poliza = {
    id: number;
    nombreCliente: string;
    montoAsegurado: number;
    fechaRenovacion: Date;
}

class GestionPolizas {
    private polizas: Poliza[] = [];

    // metodo agregar poliza
    public agregarPoliza(poliza: Poliza): void {
        this.polizas.push(poliza);
        console.log(`Póliza agregada para ${poliza.nombreCliente} con monto asegurado de ${poliza.montoAsegurado}`);
    }
    // metodo programar renovacion
    public programarRenovacion(id: number, diasParaRenovar: number): void {
        console.log(`Programando renovación de la póliza con ID ${id}...`);
        setTimeout(() => {
            const poliza = this.polizas.find(p => p.id === id);
            if (poliza) {
                const nuevaFecha = new Date();
                nuevaFecha.setDate(nuevaFecha.getDate() + diasParaRenovar);
                poliza.fechaRenovacion = nuevaFecha;
                console.log(`Póliza para ${poliza.nombreCliente} renovada. Nueva fecha de renovación: ${poliza.fechaRenovacion.toDateString()}`);
            } else {
                console.log(`No se encontró una póliza con ID ${id}.`);
            }
        }, 4000); // 4 segundos

    }

    // metodo mostrar polizas activas
    public mostrarPolizasActivas(): void {
        console.log("Pólizas activas:");
        this.polizas.forEach((poliza) => {
            console.log(`ID: ${poliza.id}, Cliente: ${poliza.nombreCliente}, Monto Asegurado: ${poliza.montoAsegurado}, Fecha de Renovación: ${poliza.fechaRenovacion.toDateString()}`);
        });
    }
}
//Ejemplo de uso
const gestionPolizas = new GestionPolizas();
gestionPolizas.agregarPoliza({ id: 1, nombreCliente: "Carlos", montoAsegurado: 10000, fechaRenovacion: new Date('2024-12-31') });
gestionPolizas.agregarPoliza({ id: 2, nombreCliente: "María", montoAsegurado: 20000, fechaRenovacion: new Date('2024-11-30') });
gestionPolizas.mostrarPolizasActivas();
gestionPolizas.programarRenovacion(1, 30);
gestionPolizas.mostrarPolizasActivas();
