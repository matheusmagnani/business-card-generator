import React from 'react';
import { Link, Outlet } from "react-router-dom";

export function Index() {
  return (
    <div>
      <Link className="text-green" to="/forms">Formulario</Link>
      <Outlet />
    </div>

  );
}