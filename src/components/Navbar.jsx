import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            Anvit.dev
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <Link to="/contact" className="hover:text-blue-600 transition">
  Contact
</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-4 text-gray-600 font-medium">
            <a href="#services" className="block hover:text-blue-600">
              Services
            </a>
            <a href="#projects" className="block hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="block hover:text-blue-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;