import type { Almacen } from "./Almacen";
import type { TipoTienda } from "./TipoTienda";

export class Tienda {
    private static readonly serialVersionUID: number = 1;

    private idTienda: number | null;
    private codigo: string;
    private descripcion: string;
    private tipo: TipoTienda;
    private usuario: string;
    private email: string;
    private telefono: string;
    private almacenes: Almacen[];
    private fechaAlta: Date | null;
    private fechaBaja: Date | null;

    constructor(
        idTienda: number | null,
        codigo: string,
        descripcion: string,
        tipo: TipoTienda,
        usuario: string,
        email: string,
        telefono: string,
        almacenes: Almacen[],
        fechaAlta: Date | null,
        fechaBaja: Date | null,
    ) {
        this.idTienda = idTienda;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.usuario = usuario;
        this.email = email;
        this.telefono = telefono;
        this.almacenes = almacenes;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
    }

    public getIdTienda(): number | null {
        return this.idTienda;
    }

    public setIdTienda(idTienda: number | null): void {
        this.idTienda = idTienda;
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

    public getTipo(): TipoTienda {
        return this.tipo;
    }

    public setTipo(tipo: TipoTienda): void {
        this.tipo = tipo;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public setTelefono(telefono: string): void {
        this.telefono = telefono;
    }

    public getAlmacenes(): Almacen[] {
        return this.almacenes;
    }

    public setAlmacenes(almacenes: Almacen[]): void {
        this.almacenes = almacenes;
    }

    public getFechaAlta(): Date | null {
        return this.fechaAlta;
    }

    public setFechaAlta(fechaAlta: Date | null): void {
        this.fechaAlta = fechaAlta;
    }

    public getFechaBaja(): Date | null {
        return this.fechaBaja;
    }

    public setFechaBaja(fechaBaja: Date | null): void {
        this.fechaBaja = fechaBaja;
    }

    public static getSerialversionuid(): number {
        return Tienda.serialVersionUID;
    }
}