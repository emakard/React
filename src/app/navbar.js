"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image src="/logo.png" alt="Strategism Logo" width={160} height={50} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-blue-600">Home</a>
          </li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-blue-600"
            >
              Courses <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">AI & ML</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Web Development</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Cybersecurity</a></li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md rounded-lg mt-2 space-y-2 text-center py-4">
          <li>
            <a href="#" className="block py-2 hover:text-blue-600">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-blue-600">Courses</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:text-blue-600">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
