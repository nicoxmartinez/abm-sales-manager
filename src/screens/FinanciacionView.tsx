import { useBusqueda } from "@hooks/state/SearchState";
import { ContainerView } from "@layouts/ContainerView";
import { SearchInput } from "@components/SearchControl";

export default function FinanciacionView() {
    const { busqueda, handleSearchChange } = useBusqueda("");

    const test = (busqueda: string): void => {
        return console.log(`Buscar: ${busqueda}`)
    }

    return (
        <ContainerView title="Gestión de Financiaciones">
            <SearchInput
                value={busqueda}
                onChange={handleSearchChange}
                onSearch={() => test(busqueda)}
                placeholder="Ingrese un dato"
            />
        </ContainerView>
    );
}