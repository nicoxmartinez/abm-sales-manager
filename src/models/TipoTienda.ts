export const TipoTiendaEnum = {
    FISICA: "FISICA",
    VIRTUAL: "VIRTUAL"
} as const;

export type TipoTienda = typeof TipoTiendaEnum[keyof typeof TipoTiendaEnum];

export const TipoTiendaDescripciones: Record<TipoTienda, string> = {
    [TipoTiendaEnum.FISICA]: "Tienda Física",
    [TipoTiendaEnum.VIRTUAL]: "Tienda Virtual"
};

export function getDescripcionTipoTienda(tipo: TipoTienda): string {
    return TipoTiendaDescripciones[tipo];
}