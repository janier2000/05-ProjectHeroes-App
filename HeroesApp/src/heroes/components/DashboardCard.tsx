import type { PropsWithChildren } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Props extends PropsWithChildren {
  titulo: string;
  icono: React.ReactNode;
}

export function DashboardCard({ titulo, icono, children }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{titulo}</CardTitle>
        {icono}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
