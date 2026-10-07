import { Header } from "@/components/personalizado/Header";
import { Dashboard } from "@/heroes/components/Dashboard";

export function BuscarPage() {
  return (
    <>
      <Header
        titulo="Superhero Universe"
        descripcion="Discover, explore, and manage your favorite superheroes and villains"
      ></Header>
      <Dashboard />
    </>
  );
}
export default BuscarPage;
