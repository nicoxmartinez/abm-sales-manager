import { PlanCuota } from "./PlanCuota";

export class Financiacion {
    private idFinanciacion: number | null;
    private codigo: number;
    private descripcion: string;
    private activa: boolean;
    private planesCuota: PlanCuota[];

    constructor(
        idFinanciacion: number | null,
        codigo: number,
        descripcion: string,
        activa: boolean,
        planesCuota: PlanCuota[],
    ) {
        this.idFinanciacion = idFinanciacion;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.activa = activa;
        this.planesCuota = planesCuota;
    }

    public getIdFinanciacion(): number | null {
        return this.idFinanciacion;
    }

    public setIdFinanciacion(idFinanciacion: number | null): void {
        this.idFinanciacion = idFinanciacion;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public isActiva(): boolean {
        return this.activa;
    }

    public setActiva(activa: boolean): void {
        this.activa = activa;
    }

    public getPlanesCuota(): PlanCuota[] {
        return this.planesCuota;
    }

    public setPlanesCuota(planesCuota: PlanCuota[]): void {
        this.planesCuota = planesCuota;
    }
}