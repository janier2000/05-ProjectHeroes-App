import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";
import { BuscarControles } from "./ui/BuscarControles";

export function BuscarPage() {
  return (
    <>
      <Header
        titulo="Superhero Universe"
        descripcion="Descubre, explora y gestiona tus superhéroes y villanos favoritos."
      ></Header>
      <Dashboard />
      {/* filtrar y buscar */}
      <BuscarControles />
    </>
  );
}
export default BuscarPage;
