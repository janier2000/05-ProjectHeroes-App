import { createBrowserRouter, createHashRouter, Navigate } from "react-router";
import { lazy } from "react";
import { HeroePage } from "@/heroes/pages/heroe/HeroePage";
import { HeroeLayout } from "@/heroes/layouts/HeroeLayout";
// import { BuscarPage } from "@/heroes/pages/buscar/BuscarPage";
import { AdministrarPage } from "@/admin/pages/AdministrarPage";
import { InicioPage } from "@/heroes/pages/inicio/InicioPage";
import { AdministradorLayout } from "@/admin/layouts/AdministradorLayout";

const BuscarPage = lazy(() => import("@/heroes/pages/buscar/BuscarPage"));

// export const RutasApp = createBrowserRouter([
export const RutasApp = createHashRouter([
  {
    path: "/",
    element: <HeroeLayout />,
    children: [
      {
        index: true,
        element: <InicioPage />,
      },
      {
        path: "heroe/:idSlug",
        element: <HeroePage />,
      },
      {
        path: "buscar",
        element: <BuscarPage />,
      },
      {
        path: "*",
        // element: <h1>404</h1>,
        element: <Navigate to="/" />,
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
