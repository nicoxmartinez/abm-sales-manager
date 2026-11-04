export class Vendedor {
    private idVendedor: number | null;
    private nombre: string;
    private apellido: string;
    private documento: string;
    private fechaNacimiento: Date | null;
    private codigo: number;
    private usuario: string;
    private fechaAlta: Date | null;
    private fechaBaja: Date | null;
    private fechaModificacion: Date | null;

    constructor(
        idVendedor: number | null = null,
        nombre: string,
        apellido: string,
        documento: string,
        fechaNacimiento: Date | null,
        codigo: number,
        usuario: string,
        fechaAlta: Date | null,
        fechaBaja: Date | null,
        fechaModificacion: Date | null,
    ) {
        this.idVendedor = idVendedor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.fechaNacimiento = fechaNacimiento;
        this.codigo = codigo;
        this.usuario = usuario;
        this.fechaAlta = fechaAlta;
        this.fechaBaja = fechaBaja;
        this.fechaModificacion = fechaModificacion;
    }

    public getIdVendedor(): number | null {
        return this.idVendedor;
    }

    public setIdVendedor(idVendedor: number | null): void {
        this.idVendedor = idVendedor;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getDocumento(): string {
        return this.documento;
    }

    public setDocumento(documento: string): void {
        this.documento = documento;
    }

    public getFechaNacimiento(): Date | null {
        return this.fechaNacimiento;
    }

    public setFechaNacimiento(fechaNacimiento: Date | null): void {
        this.fechaNacimiento = fechaNacimiento;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
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

    public getFechaModificacion(): Date | null {
        return this.fechaModificacion;
    }

    public setFechaModificacion(fechaModificacion: Date | null): void {
        this.fechaModificacion = fechaModificacion;
    }
}