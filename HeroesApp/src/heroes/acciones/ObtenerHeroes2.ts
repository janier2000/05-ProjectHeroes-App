import { HeroeAPI } from "../api/HeroeAPI";

export async function ObtenerHeroes2() {
  const { data } = await HeroeAPI().get(`/`);
  return data;
}
