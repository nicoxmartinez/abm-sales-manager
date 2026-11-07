import { useState, type ChangeEvent } from "react";

export function useBusqueda(initialValue: string) {
  const [busqueda, setBusqueda] = useState<string>(initialValue);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBusqueda(e.target.value);
  };

  const clearBusqueda = () => {
    setBusqueda("");
  };

  return {
    busqueda,
    setBusqueda,
    handleSearchChange,
    clearBusqueda,
  };
}