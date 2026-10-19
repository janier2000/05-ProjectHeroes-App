import type { Hero } from "./heroeInterface";

export interface HeroeResponse {
  total: number;
  pages: number;
  heroes: Hero[];
}
