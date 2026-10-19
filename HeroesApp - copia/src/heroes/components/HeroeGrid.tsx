import { GridCard } from "./GridCard";
import type { Hero } from "../types/heroeInterface";

interface Props {
  LstHeroes: Hero[];
}

export function HeroeGrid({ LstHeroes }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {LstHeroes.map((item) => (
        <GridCard key={item.id} ObjHeroe={item} />
      ))}
    </div>
  );
}
