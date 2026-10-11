import type { Heroe } from "./heroeInterface";

export interface HeroeResponse {
  total: number;
  pages: number;
  heroes: Heroe[];
}
