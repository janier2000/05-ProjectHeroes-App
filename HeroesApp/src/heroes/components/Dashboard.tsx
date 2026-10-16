import { Badge } from "@/components/ui/badge";
import { Users, Zap, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "./DashboardCard";
import { useHeroeResument } from "../hooks/useHeroeResument";
import { use } from "react";
import { HeroeFavoritoContext } from "../context/HeroeFavoritoContext";
// import { useQuery } from "@tanstack/react-query";
// import { ObtenerResumen } from "../acciones/ObtenerResumen";

export function Dashboard() {
  const { data: ResumenResponse } = useHeroeResument();

  const { ConteoFavoritos } = use(HeroeFavoritoContext);

  // const { data: ResumenResponse } = useQuery({
  //   queryKey: ["summary-information"],
  //   queryFn: () => ObtenerResumen(),
  //   staleTime: 1000 * 60 * 5, // 5 minutos
  // });

  if (!ResumenResponse) {
    return <div>cargando</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de heroes</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {ResumenResponse?.totalHeroes ?? 0}
          </div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              {ResumenResponse?.heroCount ?? 0} Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              {ResumenResponse?.villainCount ?? 0} Villanos
            </Badge>
          </div>
        </CardContent>
      </Card>

      <DashboardCard
        titulo="favoritos"
        icono={<Users className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-2xl font-bold text-red-600">
              {ConteoFavoritos ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {(
                (ConteoFavoritos / (ResumenResponse?.totalHeroes ?? 1)) *
                100
              ).toFixed(2)}
              % de total
            </p>
          </>
        }
      ></DashboardCard>

      <DashboardCard
        titulo="El más fuerte"
        icono={<Zap className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">
              {ResumenResponse?.strongestHero.alias ?? ""}
            </div>
            <p className="text-xs text-muted-foreground">
              Fortaleza: {ResumenResponse?.strongestHero.strength ?? ""}
            </p>
          </>
        }
      ></DashboardCard>

      <DashboardCard
        titulo="El más inteligente"
        icono={<Trophy className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">
              {ResumenResponse?.smartestHero.alias ?? ""}
            </div>
            <p className="text-xs text-muted-foreground">
              Inteligencia: {ResumenResponse?.smartestHero.intelligence ?? ""}
            </p>
          </>
        }
      ></DashboardCard>
    </div>
  );
}
