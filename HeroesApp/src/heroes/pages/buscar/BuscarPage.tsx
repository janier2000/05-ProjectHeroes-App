import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";
import { BuscarControles } from "./ui/BuscarControles";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { ObtenerHeroeFiltro } from "@/heroes/acciones/ObtenerHeroeFiltro";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";

export function BuscarPage() {
  const [searchParams] = useSearchParams();

  const nombre = searchParams.get("nombre") ?? undefined;
  const fuerza = searchParams.get("fuerza") ?? undefined;

  const { data: LstHeroesResponce = [] } = useQuery({
    queryKey: ["buscar", { nombre, fuerza }],
    queryFn: function () {
      return ObtenerHeroeFiltro({ name: nombre, strength: fuerza });
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
  });

  return (
    <>
      <Header
        titulo="Busqueda de Superhéroe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>

      <Breadcrumbs
        paginaActual="Buscador de héroes"
        breadcrumbs={[
          { label: "Home1", to: "/" },
          { label: "Home2", to: "/" },
          { label: "Home3", to: "/" },
        ]}
      />

      <Dashboard />

      {/* filtrar y buscar */}
      <BuscarControles />

      <HeroeGrid LstHeroes={LstHeroesResponce} />
    </>
  );
}
export default BuscarPage;
