import { useParams } from "react-router";

export function HeroePage() {
  const { idSlug = "" } = useParams();

  return <div>pagina heroes</div>;
}
