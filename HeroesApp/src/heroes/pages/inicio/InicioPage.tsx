import { useHeroeResument } from "@/heroes/hooks/useHeroeResument";
import { useHeroePaginacion } from "@/heroes/hooks/useHeroePaginacion";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { use } from "react";
import { HeroeFavoritoContext } from "@/heroes/context/HeroeFavoritoContext";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";
import { Dashboard } from "@/heroes/components/Dashboard";
import { HeroeGrid } from "@/heroes/components/HeroeGrid";
import { Paginacion } from "@/components/personalizado/Paginacion";
// import { ObtenerHeroes } from "@/heroes/acciones/ObtenerHeroes";
// import { ObtenerResumen } from "@/heroes/acciones/ObtenerResumen";
// import { useQuery } from "@tanstack/react-query";

export function InicioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { ConteoFavoritos, ListadoFavoritos } = use(HeroeFavoritoContext);

  const activarTab = searchParams.get("tab") ?? "todos";
  const pagina = searchParams.get("page") ?? "1";
  const limite = searchParams.get("limit") ?? "2";
  const categoria = searchParams.get("category") ?? "all";

  const selectorTab = useMemo(
    function () {
      const ArraysValidoTabs = ["todos", "favoritos", "heroes", "villanos"];
      return ArraysValidoTabs.includes(activarTab) ? activarTab : "todos";
    },
    [activarTab],
  );

  const { data: heroesResponse } = useHeroePaginacion(
    +pagina,
    +limite,
    categoria,
  );
  const { data: ResumenResponse } = useHeroeResument();

  // console.log(searchParams);

  // const { data: heroesResponse } = useQuery({
  //   queryKey: ["heroes", { page: pagina, limit: limite }],
  //   queryFn: function () {
  //     return ObtenerHeroes(+pagina, +limite);
  //   },
  //   staleTime: 1000 * 60 * 5,
  // });

  // const { data: ResumenResponse } = useQuery({
  //   queryKey: ["summary-information"],
  //   queryFn: () => ObtenerResumen(),
  //   staleTime: 1000 * 60 * 5, // 5 minutos
  // });

  // const [activaTab, setActivaTab] = useState<
  //   "todos" | "favoritos" | "heroes" | "villanos"
  // >("todos");
  // console.log(heroesResponse);

  return (
    <>
      <Header
        titulo="Universo Superhéroe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>
      <Breadcrumbs paginaActual="Super Héroes" />

      <Dashboard />

      {/* Tabs */}
      <Tabs value={selectorTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="todos"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "todos");
                prev.set("category", "all");
                prev.set("page", "1");
                return prev;
              })
            }
          >
            Todos los personajes ({ResumenResponse?.totalHeroes ?? 0})
          </TabsTrigger>
          <TabsTrigger
            value="favoritos"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "favoritos");
                return prev;
              })
            }
          >
            Favoritos ({ConteoFavoritos ?? 0})
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "heroes");
                prev.set("category", "hero");
                prev.set("page", "1");
                return prev;
              })
            }
          >
            Heroes ({ResumenResponse?.heroCount ?? 0})
          </TabsTrigger>
          <TabsTrigger
            value="villanos"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "villanos");
                prev.set("category", "villain");
                prev.set("page", "1");
                return prev;
              })
            }
          >
            Villanos ({ResumenResponse?.villainCount ?? 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <HeroeGrid LstHeroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="favoritos">
          {<HeroeGrid LstHeroes={ListadoFavoritos} />}
        </TabsContent>

        <TabsContent value="heroes">
          {<HeroeGrid LstHeroes={heroesResponse?.heroes ?? []} />}
        </TabsContent>

        <TabsContent value="villanos">
          {<HeroeGrid LstHeroes={heroesResponse?.heroes ?? []} />}
        </TabsContent>
      </Tabs>

      {selectorTab !== "favoritos" && (
        <Paginacion totalPagina={heroesResponse?.pages ?? 0} />
      )}
    </>
  );
}
