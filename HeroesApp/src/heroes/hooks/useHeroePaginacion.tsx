import { useQuery } from "@tanstack/react-query";
import { ObtenerHeroes } from "../acciones/ObtenerHeroes";

export function useHeroePaginacion(page: number, limit: number) {
  return useQuery({
    queryKey: ["heroes", { page, limit }],
    queryFn: function () {
      return ObtenerHeroes(page, limit);
    },
    staleTime: 1000 * 60 * 5,
  });
}
