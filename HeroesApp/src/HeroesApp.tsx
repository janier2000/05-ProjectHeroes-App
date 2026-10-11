import { RutasApp } from "./ruta/RutasApp";
import { RouterProvider } from "react-router";

export function HeroesApp() {
  return <RouterProvider router={RutasApp} />;
}
