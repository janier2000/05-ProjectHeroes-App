import { RutasApp } from "./ruta/RutasApp";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function HeroesApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={RutasApp} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
