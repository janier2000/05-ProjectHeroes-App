import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SortAsc, Grid, Plus } from "lucide-react";
import { useRef } from "react";
import { useSearchParams } from "react-router";
import { Slider } from "@/components/ui/slider";

export function BuscarControles() {
  const inputBusquedaRef = useRef<HTMLInputElement>(null);
  const [busquedaParametros, setBusquedaParametros] = useSearchParams();
  const FuerzaSeleccionada = Number(busquedaParametros.get("fuerza") ?? "0");

  function handleKeyDownInput(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      const value = inputBusquedaRef.current?.value ?? "";
      setQueryParametros("nombre", value);
    }
  }

  function setQueryParametros(nombre: string, value: string) {
    setBusquedaParametros((prev) => {
      prev.set(nombre, value);
      return prev;
    });
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* busqueda */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            ref={inputBusquedaRef}
            placeholder="Busca héroes, villanos, poderes, equipos..."
            className="pl-12 h-12 text-lg bg-white"
            onKeyDown={handleKeyDownInput}
            defaultValue={busquedaParametros.get("nombre") ?? ""}
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="h-12 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>

          <Button variant="outline" className="h-12 bg-transparent">
            <SortAsc className="h-4 w-4 mr-2" />
            Ordenar por Nombre
          </Button>

          <Button variant="outline" className="h-12 bg-transparent">
            <Grid className="h-4 w-4" />
          </Button>

          <Button className="h-12">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Personaje
          </Button>
        </div>
      </div>

      {/* Filtros avanzados */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Filtros avanzados</h3>
          <Button variant="ghost">Limpiar todo</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Equipo</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              Todos los equipos
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Categoría</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              Todas las categorías
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Universo</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              Todos los universos
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Estado</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              Todos los estados
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">
            Fuerza mínima: {FuerzaSeleccionada}/10
          </label>
          <Slider
            defaultValue={[FuerzaSeleccionada]}
            onValueChange={(value) =>
              setQueryParametros("fuerza", value.toString())
            }
            max={10}
            step={1}
          />
        </div>
      </div>
    </>
  );
}
