import { HeroeAPI } from "../api/HeroeAPI";
import type { HeroeResumenResponse } from "../types/HeroeResumenResponse";

export async function ObtenerResumen() {
  const { data } = await HeroeAPI().get<HeroeResumenResponse>("/summary");
  return data;
}
