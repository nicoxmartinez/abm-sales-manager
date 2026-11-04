import { Vendedor } from "@models/Vendedor";

export default function Home() {
    const prueba: Vendedor = new Vendedor(
        1,
        "Juan",
        "Perez",
        "123456789",
        new Date("01/01/2000"),
        1234,
        "user",
        null,
        null,
        null,
    );
    //Prueba de ErrorBoundary
    //throw new Error("¡Error de prueba simulado para el ErrorBoundary!");
    return (
        <div>
            <h1>Home {prueba.getNombre()}</h1>
        </div>
    )
}