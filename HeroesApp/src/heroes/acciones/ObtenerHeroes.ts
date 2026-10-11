import { HeroeAPI } from "../api/HeroeAPI";
import type { HeroeResponse } from "../types/HeroeResponse";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function ObtenerHeroes(): Promise<HeroeResponse> {
  const { data } = await HeroeAPI().get<HeroeResponse>(`/`);
  const LstHeroe = data.heroes.map((item) => ({
    ...item,
    image: `${BASE_URL}/images/${item.image}`,
  }));

  console.log(LstHeroe);
  return {
    ...data,
    heroes: LstHeroe,
  };
}
