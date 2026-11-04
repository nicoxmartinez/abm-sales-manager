import type { Local } from "./Local";

export class PuntoDeVenta {
    private idPuntoDeVenta: number | null;
    private numeroTerminal: number;
    private nombreTerminal: string;
    private numeroDeCaja: number;
    private local: Local;

    constructor(
        idPuntoDeVenta: number | null,
        numeroTerminal: number,
        nombreTerminal: string,
        numeroDeCaja: number,
        local: Local,
    ) {
        this.idPuntoDeVenta = idPuntoDeVenta;
        this.numeroTerminal = numeroTerminal;
        this.nombreTerminal = nombreTerminal;
        this.numeroDeCaja = numeroDeCaja;
        this.local = local;
    }

    public getIdPuntoDeVenta(): number | null {
        return this.idPuntoDeVenta;
    }

    public setIdPuntoDeVenta(idPuntoDeVenta: number | null): void {
        this.idPuntoDeVenta = idPuntoDeVenta;
    }

    public getNumeroTerminal(): number {
        return this.numeroTerminal;
    }

    public setNumeroTerminal(numeroTerminal: number): void {
        this.numeroTerminal = numeroTerminal;
    }

    public getNombreTerminal(): string {
        return this.nombreTerminal;
    }

    public setNombreTerminal(nombreTerminal: string): void {
        this.nombreTerminal = nombreTerminal;
    }

    public getNumeroDeCaja(): number {
        return this.numeroDeCaja;
    }

    public setNumeroDeCaja(numeroDeCaja: number): void {
        this.numeroDeCaja = numeroDeCaja;
    }

    public getLocal(): Local {
        return this.local;
    }

    public setLocal(local: Local): void {
        this.local = local;
    }
}