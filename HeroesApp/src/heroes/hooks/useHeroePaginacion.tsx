import { useQuery } from "@tanstack/react-query";
import { ObtenerLstHeroes } from "../acciones/ObtenerLstHeroes";

export function useHeroePaginacion(
  page: number,
  limit: number,
  category = "all",
) {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: function () {
      return ObtenerLstHeroes(page, limit, category);
    },
    staleTime: 1000 * 60 * 5,
  });
}
