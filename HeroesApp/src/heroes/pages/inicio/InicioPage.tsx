import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";
import { Dashboard } from "@/heroes/components/Dashboard";
import { Grid } from "@/heroes/components/Grid";
import { Paginacion } from "@/components/personalizado/Paginacion";
import { ObtenerHeroes } from "@/heroes/acciones/ObtenerHeroes";
import { useSearchParams } from "react-router";

export function InicioPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activarTab = searchParams.get("tab") ?? "todos";

  const selectorTab = useMemo(
    function () {
      const ArraysValidoTabs = ["todos", "favoritos", "heroes", "villanos"];
      return ArraysValidoTabs.includes(activarTab) ? activarTab : "todos";
    },
    [activarTab],
  );

  console.log(searchParams);

  // const [activaTab, setActivaTab] = useState<
  //   "todos" | "favoritos" | "heroes" | "villanos"
  // >("todos");

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: ObtenerHeroes,
    staleTime: 1000 * 60 * 5,
  });

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
            Todos los personajes
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
            Heroes (12)
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
            Villanos (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos">
          <Grid LstHeroes={heroesResponse?.heroes ?? []} />
        </TabsContent>

        <TabsContent value="favoritos">{/* <Grid /> */}</TabsContent>

        <TabsContent value="heroes">{/* <Grid /> */}</TabsContent>

        <TabsContent value="villanos">{/* <Grid /> */}</TabsContent>
      </Tabs>

      <Paginacion totalPagina={8} />
    </>
  );
}
