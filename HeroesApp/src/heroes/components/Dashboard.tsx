import { Badge } from "@/components/ui/badge";
import { Users, Heart, Zap, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "./DashboardCard";

export function Dashboard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Total de caracteres
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">16</div>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">
              12 Heroes
            </Badge>
            <Badge variant="destructive" className="text-xs">
              2 Villanos
            </Badge>
          </div>
        </CardContent>
      </Card>

      <DashboardCard
        titulo="favoritos"
        icono={<Users className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-xs text-muted-foreground">18.8% of total</p>
          </>
        }
      ></DashboardCard>

      <DashboardCard
        titulo="El más fuerte"
        icono={<Zap className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">Superman</div>
            <p className="text-xs text-muted-foreground">Fortaleza: 10/10</p>
          </>
        }
      ></DashboardCard>

      <DashboardCard
        titulo="El más inteligente"
        icono={<Trophy className="h-4 w-4 text-muted-foreground" />}
        children={
          <>
            <div className="text-lg font-bold">Batman</div>
            <p className="text-xs text-muted-foreground">Inteligencia: 10/10</p>
          </>
        }
      ></DashboardCard>
    </div>
  );
}
