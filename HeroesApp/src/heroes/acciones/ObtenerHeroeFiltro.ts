import { HeroeAPI } from "../api/HeroeAPI";
import type { Hero } from "../types/heroeInterface";

const VITE_API_URL = import.meta.env.VITE_API_URL;

interface opcion {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

export async function ObtenerHeroeFiltro(opcion: opcion = {}) {
  const { name, team, category, universe, status, strength } = opcion;

  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }

  const { data } = await HeroeAPI().get<Hero[]>("/search", {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength,
    },
  });

  return data.map((item) => ({
    ...item,
    image: `${VITE_API_URL}/images/${item.image}`,
  }));
}
