import type { Hero } from "./heroeInterface";

export interface HeroeResumenResponse {
  totalHeroes: number;
  strongestHero: Hero;
  smartestHero: Hero;
  heroCount: number;
  villainCount: number;
}
