import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { HeroePage } from "@/heroes/pages/heroe/HeroePage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
// import { BuscarPage } from "@/heroes/pages/buscar/BuscarPage";
import { AdministrarPage } from "@/admin/pages/AdministrarPage";
import { PrincipalPage } from "@/heroes/pages/principal/PrincipalPage";
import { AdministradorLayout } from "@/admin/layouts/AdministradorLayout";

const BuscarPage = lazy(() => import("@/heroes/pages/buscar/BuscarPage"));

export const RutasApp = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <PrincipalPage />,
      },
      {
        path: "heroe/1",
        element: <HeroePage />,
      },
      {
        path: "buscar",
        element: <BuscarPage />,
      },
    ],
  },
  {
    path: "/administrador",
    element: <AdministradorLayout />,
    children: [
      {
        index: true,
        element: <AdministrarPage />,
      },
    ],
  },
]);
