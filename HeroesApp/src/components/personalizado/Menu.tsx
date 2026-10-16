import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Menu() {
  const { pathname: rutaDeAcceso } = useLocation();

  function EstaActivo(path: string) {
    return rutaDeAcceso === path;
  }

  return (
    <NavigationMenu className="bg-slate-100 py-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className={cn(
              "flex items-center rounded-md p-2 text-sm transition-colors",
              EstaActivo("/") && "bg-slate-200",
            )}
          >
            Inicio
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            to="/buscar"
            className={cn(
              "flex items-center rounded-md p-2 text-sm transition-colors",
              EstaActivo("/buscar") && "bg-slate-200",
            )}
          >
            Buscar
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
