import { HeroeHeader } from "@/components/personalizado/HeroeHeader";
import { HeroeDashboard } from "@/heroes/components/HeroeDashboard";

export function BuscarPage() {
  return (
    <>
      <HeroeHeader
        titulo="Superhero Universe"
        descripcion="Discover, explore, and manage your favorite superheroes and villains"
      ></HeroeHeader>
      <HeroeDashboard />
    </>
  );
}
export default BuscarPage;
