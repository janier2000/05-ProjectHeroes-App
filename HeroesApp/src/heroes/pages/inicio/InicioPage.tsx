import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";
import { Dashboard } from "@/heroes/components/Dashboard";
import { Grid } from "@/heroes/components/Grid";
import { Paginacion } from "@/components/personalizado/Paginacion";
import { ObtenerHeroes } from "@/heroes/acciones/ObtenerHeroes";

export function InicioPage() {
  const [activaTab, setActivaTab] = useState<
    "todos" | "favoritos" | "heroes" | "villanos"
  >("todos");

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: ObtenerHeroes,
    staleTime: 1000 * 60 * 5,
  });

  console.log(heroesResponse);

  return (
    <>
      <Header
        titulo="Universo Superhéroe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>
      <Breadcrumbs paginaActual="Super Héroes" />

      <Dashboard />

      {/* Tabs */}
      <Tabs value={activaTab} onValueChange={setActivaTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todos" onClick={() => setActivaTab("todos")}>
            Todos los personajes
          </TabsTrigger>
          <TabsTrigger
            value="favoritos"
            onClick={() => setActivaTab("favoritos")}
          >
            Favoritos (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActivaTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villanos"
            onClick={() => setActivaTab("villanos")}
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
