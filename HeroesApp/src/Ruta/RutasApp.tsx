import { createBrowserRouter } from "react-router";
import { HeroePage } from "@/heroes/pages/heroe/HeroePage";
import AdministrarPage from "@/admin/pages/AdministrarPage";
import { BuscarPage } from "@/heroes/pages/buscar/BuscarPage";
import { PrincipalPage } from "@/heroes/pages/principal/PrincipalPage";

export const RutasApp = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage />,
  },
  {
    path: "/heroe/1",
    element: <HeroePage />,
  },
  {
    path: "/buscar",
    element: <BuscarPage />,
  },
  {
    path: "/administrador",
    element: <AdministrarPage />,
  },
]);
