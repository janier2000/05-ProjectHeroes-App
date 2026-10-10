import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Menu() {
  const { pathname: rutaDeAcceso } = useLocation();
  // console.log(rutaDeAcceso);

  function EstaActivo(path: string) {
    return rutaDeAcceso === path;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Inicio */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(EstaActivo("/") && "bg-slate-200", "p-2 rounded-md")}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Buscar */}
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(
              EstaActivo("/buscar") && "bg-slate-200",
              "p-2 rounded-md",
            )}
          >
            <Link to="/buscar">Buscar</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
