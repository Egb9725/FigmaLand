import { useState } from "react";
import Icons from "../Icons/index";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">

        {/* Logo centré */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {/* Icône du menu burger pour la version mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

         
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Product
          </a>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>

           {/* Logo Figma Land */}
           <div className="mx-auto md:mx-0">
            <img
              src="https://res.cloudinary.com/doq50mquo/image/upload/v1725440638/Rectangle_4_vtysq9.png"
              alt="Figma Land"
              className="h-10"
            />
          </div>

        </nav>

        {/* Icônes */}
        <div className="flex space-x-4">
          <Icons />
        </div>
      </div>

      {/* Menu déroulant pour la version mobile */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Product
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
