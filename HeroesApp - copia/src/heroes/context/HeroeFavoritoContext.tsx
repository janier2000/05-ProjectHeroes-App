import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/heroeInterface";
import { useEffect } from "react";

interface HeroeFavoritoContext {
  // estado
  ListadoFavoritos: Hero[];
  ConteoFavoritos: number;

  // metodo
  Esfavorito: (heroeObj: Hero) => boolean;
  Mantenimiento: (heroeObj: Hero) => void;
}

function ObtenerFavoritosLocalStorage(): Hero[] {
  const lstfavoritos = localStorage.getItem("lstfavoritos-Storage");
  return lstfavoritos ? JSON.parse(lstfavoritos) : [];
}

export const HeroeFavoritoContext = createContext({} as HeroeFavoritoContext);

export function HeroeFavoritoProvider({ children }: PropsWithChildren) {
  const [listado, setListado] = useState<Hero[]>(
    ObtenerFavoritosLocalStorage(),
  );

  function mantenimiento(heroeObj: Hero) {
    const ind = listado.find((h) => h.id === heroeObj.id);
    if (ind) {
      const listadoAux = listado.filter((h) => h.id !== heroeObj.id);
      setListado(listadoAux);
      return;
    }
    const listadoAux = [...listado, heroeObj];
    setListado(listadoAux);
  }

  function buscar(heroeObj: Hero) {
    return listado.some((h) => h.id === heroeObj.id);
  }

  useEffect(() => {
    localStorage.setItem("lstfavoritos-Storage", JSON.stringify(listado));
  }, [listado]);

  return (
    <HeroeFavoritoContext.Provider
      value={{
        ListadoFavoritos: listado,
        ConteoFavoritos: listado.length,
        Esfavorito: buscar,
        Mantenimiento: mantenimiento,
      }}
    >
      {children}
    </HeroeFavoritoContext.Provider>
  );
}
