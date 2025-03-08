"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const subjects = [
    "Data Science",
    "Business",
    "Computer Science",
    "Information Technology",
    "Language Learning",
    "Health",
    "Personal Development",
    "Physical Science and Engineering",
    "Social Sciences",
    "Arts and Humanities",
    "Math and Logic",
  ];

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
      >
        Explore <FaChevronDown className="ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 z-50">
          <ul className="space-y-2">
            <li className="font-semibold text-gray-900">Take a free course</li>
            <li className="font-semibold text-gray-900">Earn a Degree</li>
            <li className="font-semibold text-gray-900">Earn a Certificate</li>
            <li className="font-semibold text-gray-900">Find your new career</li>
            <hr className="my-2" />
            <li className="font-bold text-gray-900">Subjects</li>
            {subjects.map((subject, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-700 hover:bg-gray-100 p-2 rounded-md cursor-pointer"
              >
                {subject} <FaChevronRight className="text-gray-500" />
              </li>
            ))}
            <button className="mt-4 w-full text-blue-600 font-semibold border border-blue-600 py-2 rounded-md hover:bg-blue-50">
              Browse all subjects
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
