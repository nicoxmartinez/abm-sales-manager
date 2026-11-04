import type { Financiacion } from "./Financiacion";
import type { TipoMedioPago } from "./TipoMedioPago";

export class MedioDePago {
    private idMedioPago: number | null;
    private codigo: string;
    private detalle: string;
    private abreviatura: string;
    private tipoMedioPago: TipoMedioPago;
    private habilitado: boolean;
    private permiteBonificacion: boolean;
    private fechaBaja: Date;
    private financiacion: Financiacion;

    constructor(
        idMedioPago: number | null,
        codigo: string,
        detalle: string,
        abreviatura: string,
        tipoMedioPago: TipoMedioPago,
        habilitado: boolean,
        permiteBonificacion: boolean,
        fechaBaja: Date,
        financiacion: Financiacion,
    ) {
        this.idMedioPago = idMedioPago;
        this.codigo = codigo;
        this.detalle = detalle;
        this.abreviatura = abreviatura;
        this.tipoMedioPago = tipoMedioPago;
        this.habilitado = habilitado;
        this.permiteBonificacion = permiteBonificacion;
        this.fechaBaja = fechaBaja;
        this.financiacion = financiacion;
    }

    public getIdMedioPago(): number | null {
        return this.idMedioPago;
    }

    public setIdMedioPago(idMedioPago: number | null) {
        return this.idMedioPago = idMedioPago;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public setCodigo(codigo: string): void {
        this.codigo = codigo;
    }

    public getDetalle(): string {
        return this.detalle;
    }

    public setDetalle(detalle: string): void {
        this.detalle = detalle;
    }

    public getAbreviatura(): string {
        return this.abreviatura;
    }

    public setAbreviatura(abreviatura: string): void {
        this.abreviatura = abreviatura;
    }

    public getTipoMedioPago(): TipoMedioPago {
        return this.tipoMedioPago;
    }

    public setTipoMedioPago(tipoMedioPago: TipoMedioPago): void {
        this.tipoMedioPago = tipoMedioPago;
    }

    public isHabilitado(): boolean {
        return this.habilitado;
    }

    public setHabilitado(habilitado: boolean): void {
        this.habilitado = habilitado;
    }

    public isPermiteBonificacion(): boolean {
        return this.permiteBonificacion;
    }

    public setPermiteBonificacion(permiteBonificacion: boolean): void {
        this.permiteBonificacion = permiteBonificacion;
    }

    public getFechaBaja(): Date {
        return this.fechaBaja;
    }

    public setFechaBaja(fechaBaja: Date): void {
        this.fechaBaja = fechaBaja;
    }

    public getFinanciacion(): Financiacion {
        return this.financiacion;
    }

    public setFinanciacion(financiacion: Financiacion): void {
        this.financiacion = financiacion;
    }
}