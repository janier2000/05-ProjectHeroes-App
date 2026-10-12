import { useHeroeResument } from "@/heroes/hooks/useHeroeResument";
import { useHeroePaginacion } from "@/heroes/hooks/useHeroePaginacion";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";
import { Dashboard } from "@/heroes/components/Dashboard";
import { Grid } from "@/heroes/components/Grid";
import { Paginacion } from "@/components/personalizado/Paginacion";
// import { ObtenerHeroes } from "@/heroes/acciones/ObtenerHeroes";
// import { ObtenerResumen } from "@/heroes/acciones/ObtenerResumen";
// import { useQuery } from "@tanstack/react-query";

export function InicioPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activarTab = searchParams.get("tab") ?? "todos";
  const pagina = searchParams.get("page") ?? "1";
  const limite = searchParams.get("limit") ?? "6";
  // const categoria = searchParams.get('category') ?? 'all';

  const selectorTab = useMemo(
    function () {
      const ArraysValidoTabs = ["todos", "favoritos", "heroes", "villanos"];
      return ArraysValidoTabs.includes(activarTab) ? activarTab : "todos";
    },
    [activarTab],
  );
  // console.log(searchParams);

  const { data: heroesResponse } = useHeroePaginacion(+pagina, +limite);
  // const { data: heroesResponse } = useQuery({
  //   queryKey: ["heroes", { page: pagina, limit: limite }],
  //   queryFn: function () {
  //     return ObtenerHeroes(+pagina, +limite);
  //   },
  //   staleTime: 1000 * 60 * 5,
  // });

  const { data: ResumenResponse } = useHeroeResument();

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
                prev.set("categoria", "todos");
                prev.set("pagina", "1");
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
            Favoritos (3)
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("tab", "heroes");
                prev.set("categoria", "heroes");
                prev.set("pagina", "1");
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
                prev.set("categoria", "villanos");
                prev.set("pagina", "1");
                return prev;
              })
            }
          >
            Villanos ({ResumenResponse?.villainCount ?? 0})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Grid LstHeroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="favoritos">{/* <Grid /> */}</TabsContent>

        <TabsContent value="heroes">{/* <Grid /> */}</TabsContent>

        <TabsContent value="villanos">{/* <Grid /> */}</TabsContent>
      </Tabs>

      <Paginacion totalPagina={heroesResponse?.pages ?? 0} />
    </>
  );
}
