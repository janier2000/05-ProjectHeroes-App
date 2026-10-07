import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  totalPagina: number;
}

export function Paginacion({ totalPagina }: Props) {
  const pagina = 1 as number;
  return (
    <>
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled={pagina === 1}>
          <ChevronLeft className="h-4 w-4" />
          Anteriores
        </Button>

        {Array.from({ length: totalPagina }).map((_, index) => (
          <Button
            key={index}
            variant={pagina === index + 1 ? "default" : "outline"}
            size="sm"
          >
            {index + 1}
          </Button>
        ))}

        <Button variant="outline" size="sm" disabled={pagina === totalPagina}>
          Siguientes
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
