export const TipoMedioPagoEnum = {
    EFECTIVO: "EFECTIVO",
    DEBITO: "DEBITO",
    CREDITO: "CREDITO",
    PREPAGO: "PREPAGO",
    CHEQUE: "CHEQUE",
    PAGO_DIGITAL: "PAGO_DIGITAL"
} as const;

export type TipoMedioPago = typeof TipoMedioPagoEnum[keyof typeof TipoMedioPagoEnum];

export const TipoMedioPagoDescripciones: Record<TipoMedioPago, string> = {
    [TipoMedioPagoEnum.EFECTIVO]: "Efectivo",
    [TipoMedioPagoEnum.DEBITO]: "Tarjeta de Débito",
    [TipoMedioPagoEnum.CREDITO]: "Tarjeta de Crédito",
    [TipoMedioPagoEnum.PREPAGO]: "Tarjeta Prepaga",
    [TipoMedioPagoEnum.CHEQUE]: "Cheque",
    [TipoMedioPagoEnum.PAGO_DIGITAL]: "Pago Digital"
};

export function getDescripcionTipoMedioPago(tipo: TipoMedioPago): string {
    return TipoMedioPagoDescripciones[tipo];
}