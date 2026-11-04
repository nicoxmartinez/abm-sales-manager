import { Tienda } from "./Tienda";
import { PuntoDeVenta } from "./PuntoDeVenta";
import { Domicilio } from "./Domicilio";

export class Local extends Tienda {
    private puntosDeVenta: PuntoDeVenta[];
    private horarioApertura: string;
    private horarioCierre: string;
    private domicilio: Domicilio;

    constructor(
        puntosDeVenta: PuntoDeVenta[],
        horarioApertura: string,
        horarioCierre: string,
        domicilio: Domicilio,
        ...datosTienda: ConstructorParameters<typeof Tienda>
    ) {
        super(...datosTienda);
        this.puntosDeVenta = puntosDeVenta;
        this.horarioApertura = horarioApertura;
        this.horarioCierre = horarioCierre;
        this.domicilio = domicilio;
    }

    public getPuntoDeVenta(): PuntoDeVenta[] {
        return this.puntosDeVenta;
    }

    public setPuntoDeVenta(puntosDeVenta: PuntoDeVenta[]): void {
        this.puntosDeVenta = puntosDeVenta;
    }

    public getHorarioApertura(): string {
        return this.horarioApertura;
    }

    public setHorarioApertura(horarioApertura: string): void {
        this.horarioApertura = horarioApertura;
    }

    public getHorarioCierre(): string {
        return this.horarioCierre;
    }

    public setHorarioCierre(horarioCierre: string): void {
        this.horarioCierre = horarioCierre;
    }

    public getDomicilio(): Domicilio {
        return this.domicilio;
    }

    public setDomicilio(domicilio: Domicilio): void {
        this.domicilio = domicilio;
    }
}