import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/heroeInterface";

interface HeroeFavoritoContext {
  // estado
  Listado: Hero[];
  Conteo: number;

  // metodo
  Buscar: (heroeObj: Hero) => boolean;
  Mantenimiento: (heroeObj: Hero) => void;
}

export const HeroeFavoritoContext = createContext({} as HeroeFavoritoContext);

export function HeroeFavoritoProvider({ children }: PropsWithChildren) {
  const [listado, setListado] = useState<Hero[]>([]);

  function mantenimiento(heroeObj: Hero) {
    debugger;
    const ind = listado.find((h) => h.id === heroeObj.id);
    if (ind) {
      const listadoAux = listado.filter((h) => h.id !== heroeObj.id);
      setListado(listadoAux);
      return;
    }
    setListado([...listado, heroeObj]);
  }

  function buscar(heroeObj: Hero) {
    return listado.some((h) => h.id === heroeObj.id);
  }

  return (
    <HeroeFavoritoContext.Provider
      value={{
        Listado: listado,
        Conteo: listado.length,
        Buscar: buscar,
        Mantenimiento: mantenimiento,
      }}
    >
      {children}
    </HeroeFavoritoContext.Provider>
  );
}
