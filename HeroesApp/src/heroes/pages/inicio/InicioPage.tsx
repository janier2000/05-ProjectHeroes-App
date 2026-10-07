import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";
import { Grid } from "@/heroes/components/Grid";

export function InicioPage() {
  return (
    <>
      <Header
        titulo="Superhero Universe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>

      <Dashboard />

      {/* Tabs */}
      <Tabs value="all" className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Characters (16)</TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
          <TabsTrigger value="villains">Villains (2)</TabsTrigger>
        </TabsList>
      </Tabs>

      <Grid />

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
