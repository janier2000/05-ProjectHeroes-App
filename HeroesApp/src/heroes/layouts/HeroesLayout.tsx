import { Outlet } from "react-router";
import { Link } from "react-router";

export function HeroesLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/heroe/1">heroes</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/buscar">Buscar</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/administrador">Administrar</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
