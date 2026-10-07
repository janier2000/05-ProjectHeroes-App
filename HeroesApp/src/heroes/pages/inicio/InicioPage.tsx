import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";
import { Grid } from "@/heroes/components/Grid";
import { useState } from "react";

export function InicioPage() {
  const [activaTab, setActivaTab] = useState<
    "todos" | "favoritos" | "heroes" | "villanos"
  >("todos");

  return (
    <>
      <Header
        titulo="Superhero Universe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>

      <Dashboard />

      {/* Tabs */}
      <Tabs value={activaTab} onValueChange={setActivaTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todos" onClick={() => setActivaTab("todos")}>
            Todos los personajes (16)
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
          <Grid />
        </TabsContent>
        <TabsContent value="favoritos">
          <Grid />
        </TabsContent>
        <TabsContent value="heroes">
          <Grid />
        </TabsContent>
        <TabsContent value="villanos">
          <Grid />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <Button variant="ghost" size="sm" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
