import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { HeroePage } from "@/heroes/pages/heroe/HeroePage";
import { HeroeLayout } from "@/heroes/layouts/HeroeLayout";
// import { BuscarPage } from "@/heroes/pages/buscar/BuscarPage";
import { AdministrarPage } from "@/admin/pages/AdministrarPage";
import { InicioPage } from "@/heroes/pages/inicio/InicioPage";
import { AdministradorLayout } from "@/admin/layouts/AdministradorLayout";

const BuscarPage = lazy(() => import("@/heroes/pages/buscar/BuscarPage"));

export const RutasApp = createBrowserRouter([
  {
    path: "/",
    element: <HeroeLayout />,
    children: [
      {
        index: true,
        element: <InicioPage />,
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
