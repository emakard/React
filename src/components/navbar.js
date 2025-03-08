import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Generative AI");

  const categories = [
    "Generative AI", "AI & Machine Learning", "Data Science & Business Analytics", "Project Management",
    "Cloud Computing & DevOps", "Agile and Scrum", "IT Service and Architecture", "Cyber Security",
    "Business and Leadership", "Software Development", "Product and Design", "Quality Management", "Digital Marketing"
  ];

  const menuItems = [
    { name: "PROGRAMS" },
    { name: "COURSES" },
    { name: "RESOURCES" },
    { name: "TUITION & DATES" },
    { name: "ABOUT" },
    { name: "ENTERPRISE" },
  ];

  const courses = {
    // (same course categories as before)
  };

  const menuRef = useRef(null);
  const coursesRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        coursesRef.current &&
        !coursesRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/strategism-logo.png" alt="Strategism" width={150} height={50} />
        </div>

        {/* Main Menu */}
        <ul className="flex space-x-6 text-sm font-semibold uppercase relative">
          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={item.name === "COURSES" ? coursesRef : null}
              className="relative cursor-pointer hover:text-red-600"
              onMouseEnter={() => item.name === "COURSES" && setDropdownOpen(true)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mega Dropdown (Full-Screen Width & Height) */}
        {dropdownOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full h-[550px] bg-white shadow-xl rounded-lg p-6 z-50 flex"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Left: Scrollable Categories */}
            <div className="w-1/4 border-r overflow-y-auto max-h-[480px] p-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`p-2 text-gray-800 cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in-out ${
                    activeCategory === category ? "bg-gray-300 font-bold" : ""
                  }`}
                >
                  {category}
                </div>
              ))}
            </div>
        
            {/* Right: Courses Grid (3 Columns) */}
            <div className="w-3/4 pl-4 grid grid-cols-3 gap-6 max-h-[480px] overflow-y-auto">
              {courses[activeCategory]?.map((course, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-xl shadow-lg flex flex-col justify-between min-h-[150px] transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <h4 className="font-semibold text-lg">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.duration}</p>
                  {course.badge && (
                    <span
                      className={`mt-2 inline-block px-3 py-1 text-xs rounded-full ${
                        course.badge === "Most Popular"
                          ? "bg-orange-500 text-white"
                          : course.badge === "Trending Now"
                          ? "bg-green-500 text-white"
                          : "bg-gray-400 text-white"
                      }`}
                    >
                      {course.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex space-x-3">
          <button className="border px-4 py-2 text-sm font-bold">SIGN UP</button>
          <button
            onClick={() => router.push("/applyform")}
            className="bg-red-600 text-white px-4 py-2 text-sm font-bold rounded-md"
          >
            APPLY
          </button>
        </div>
      </div>
    </nav>
  );
}
