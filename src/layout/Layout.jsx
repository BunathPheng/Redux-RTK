import React from "react";
import { Outlet } from "react-router-dom";
import ComponentNavbar from "../navbar/NavabrCompoments";
export default function Layout() {
  return (
    <>
      <header>
        <ComponentNavbar />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
