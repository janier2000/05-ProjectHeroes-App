import { Outlet } from "react-router";

export function AdministradorLayout() {
  return (
    <div className="bg-indigo-500">
      <Outlet />
    </div>
  );
}
