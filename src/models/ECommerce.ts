import { Tienda } from "./Tienda";

export class ECommerce extends Tienda {
    private dominio: string;

    constructor(
        dominio: string,
        ...datosTienda: ConstructorParameters<typeof Tienda>
    ) {
        super(...datosTienda);
        this.dominio = dominio;
    }

    public getDominio(): string {
        return this.dominio;
    }

    public setDominio(dominio: string): void {
        this.dominio = dominio;
    }
}