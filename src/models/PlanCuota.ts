import type { Financiacion } from "./Financiacion";

export class PlanCuota {
    private id: number | null;
    private financiacion: Financiacion | null;
    private cantidadCuotas: number;
    private interes: number;

    constructor(
        id: number | null,
        financiacion: Financiacion | null,
        cantidadCuotas: number,
        interes: number,
    ) {
        this.id = id;
        this.financiacion = financiacion;
        this.cantidadCuotas = cantidadCuotas;
        this.interes = interes;
    }

    public getId(): number | null {
        return this.id;
    }

    public setId(id: number | null): void {
        this.id = id;
    }

    public getFinanciacion(): Financiacion | null {
        return this.financiacion;
    }

    public setFinanciacion(financiacion: Financiacion | null): void {
        this.financiacion = financiacion;
    }

    public getCantidadCuotas(): number {
        return this.cantidadCuotas;
    }

    public setCantidadCuotas(cantidadCuotas: number): void {
        this.cantidadCuotas = cantidadCuotas;
    }

    public getInteres(): number {
        return this.interes;
    }

    public setInteres(interes: number): void {
        this.interes = interes;
    }
}