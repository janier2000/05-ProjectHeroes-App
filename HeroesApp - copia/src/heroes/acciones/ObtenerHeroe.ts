import { HeroeAPI } from "../api/HeroeAPI";
import type { Hero } from "../types/heroeInterface";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function ObtenerHeroe(id: string): Promise<Hero> {
  const { data } = await HeroeAPI().get<Hero>(`/${id}`);
  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
}
