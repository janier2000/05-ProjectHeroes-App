import { useQuery } from "@tanstack/react-query";
import { ObtenerResumen } from "../acciones/ObtenerResumen";

export function useHeroeResument() {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: () => ObtenerResumen(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}
