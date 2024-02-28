import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="space-x-4">
          <a href="#" className="text-white">
            Inicio
          </a>
          <a href="#" className="text-white">
            Acerca de
          </a>
          <a href="#" className="text-white">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
