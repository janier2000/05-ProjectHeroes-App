import { RutasApp } from "./ruta/RutasApp";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { HeroeFavoritoProvider } from "./heroes/context/HeroeFavoritoContext";

const queryClient = new QueryClient();

export function HeroesApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroeFavoritoProvider>
        <RouterProvider router={RutasApp} />
        <ReactQueryDevtools initialIsOpen={false} />
      </HeroeFavoritoProvider>
    </QueryClientProvider>
  );
}
