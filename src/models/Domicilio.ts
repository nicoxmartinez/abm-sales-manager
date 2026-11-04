export class Domicilio {
    private idDomicilio: number | null;
    private calle: string;
    private numero: number;
    private localidad: string;
    private partido: string;
    private codigoPostal: string;
    private entreCalles: string;
    private provincia: string;
    private pais: string;

    constructor(
        idDomicilio: number,
        calle: string,
        numero: number,
        localidad: string,
        partido: string,
        codigoPostal: string,
        entreCalles: string,
        provincia: string,
        pais: string,
    ) {
        this.idDomicilio = idDomicilio;
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.partido = partido;
        this.codigoPostal = codigoPostal;
        this.entreCalles = entreCalles;
        this.provincia = provincia;
        this.pais = pais;
    }

    public getIdDomicilio(): number | null {
        return this.idDomicilio;
    }

    public setIdDomicilio(idDomicilio: number | null): void {
        this.idDomicilio = idDomicilio;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getLocalidad(): string {
        return this.localidad;
    }

    public setLocalidad(localidad: string): void {
        this.localidad = localidad;
    }

    public getPartido(): string {
        return this.partido;
    }

    public setPartido(partido: string): void {
        this.partido = partido;
    }

    public getCodigoPostal(): string {
        return this.codigoPostal;
    }

    public setCodigoPostal(codigoPostal: string): void {
        this.codigoPostal = codigoPostal;
    }

    public getEntreCalles(): string {
        return this.entreCalles;
    }

    public setEntreCalles(entreCalles: string): void {
        this.entreCalles = entreCalles;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }

    public getPais(): string {
        return this.pais;
    }

    public setPais(pais: string): void {
        this.pais = pais;
    }
}