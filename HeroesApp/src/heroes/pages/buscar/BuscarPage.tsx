import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";
import { BuscarControles } from "./ui/BuscarControles";
import { Breadcrumbs } from "@/components/personalizado/Breadcrumbs";

export function BuscarPage() {
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
    </>
  );
}
export default BuscarPage;
