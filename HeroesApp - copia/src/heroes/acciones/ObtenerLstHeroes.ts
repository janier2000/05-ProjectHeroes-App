import { HeroeAPI } from "../api/HeroeAPI";
import type { HeroeResponse } from "../types/HeroeResponse";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function ObtenerLstHeroes(
  pagina: number,
  limite: number = 2,
  categoria: string = "all",
): Promise<HeroeResponse> {
  if (isNaN(pagina)) {
    pagina = 1;
  }
  if (isNaN(limite)) {
    limite = 2;
  }

  const { data } = await HeroeAPI().get<HeroeResponse>(`/`, {
    params: {
      limit: limite,
      offset: (pagina - 1) * limite,
      category: categoria,
    },
  });

  const LstHeroe = data.heroes.map((item) => ({
    ...item,
    image: `${BASE_URL}/images/${item.image}`,
  }));

  // console.log(LstHeroe);
  return {
    ...data,
    heroes: LstHeroe,
  };
}
