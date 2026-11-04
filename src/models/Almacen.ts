import { Tienda } from "./Tienda";
import { Domicilio } from "./Domicilio";

export class Almacen {
    private idAlmacen: number | null;
    private tienda: Tienda;
    private codigo: string;
    private descripcion: string;
    private fechaBaja: Date | null;
    private domicilio: Domicilio;

    constructor(
        idAlmacen: number,
        tienda: Tienda,
        codigo: string,
        descripcion: string,
        fechaBaja: Date,
        domicilio: Domicilio
    ) {
        this.idAlmacen = idAlmacen;
        this.tienda = tienda;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.fechaBaja = fechaBaja;
        this.domicilio = domicilio;
    }

    public getIdAlmacen(): number | null {
        return this.idAlmacen;
    }

    public setIdAlmacen(idAlmacen: number | null): void {
        this.idAlmacen = idAlmacen;
    }

    public getTienda(): Tienda {
        return this.tienda;
    }

    public setTienda(tienda: Tienda): void {
        this.tienda = tienda;
    }

    public getCodigo(): string {
        return this.codigo;
    }

    public setCodigo(codigo: string): void {
        this.codigo = codigo;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getFechaBaja(): Date | null {
        return this.fechaBaja;
    }

    public setFechaBaja(fechaBaja: Date | null): void {
        this.fechaBaja = fechaBaja;
    }

    public getDomicilio(): Domicilio {
        return this.domicilio;
    }

    public setDomicilio(domicilio: Domicilio): void {
        this.domicilio = domicilio;
    }
}