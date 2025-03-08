import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    "Generative AI": [
      { title: "AI Foundations", duration: "4 Weeks", badge: "Most Popular" },
      { title: "AI for Business", duration: "6 Weeks", badge: "Trending Now" },
      { title: "AI Ethics & Policy", duration: "3 Weeks" },
      { title: "Machine Learning Basics", duration: "5 Weeks", badge: "New" },
      { title: "Deep Learning Specialization", duration: "8 Weeks", badge: "Popular" },
      { title: "Natural Language Processing", duration: "7 Weeks", badge: "In Demand" },
      { title: "Computer Vision with AI", duration: "6 Weeks" },
      { title: "AI in Healthcare", duration: "4 Weeks", badge: "Emerging" },
      { title: "AI for Data Science", duration: "5 Weeks" },
      { title: "Reinforcement Learning Fundamentals", duration: "6 Weeks", badge: "Advanced" },
      { title: "AI Project Management", duration: "4 Weeks", badge: "For Experts" },
      { title: "AI in Robotics", duration: "6 Weeks" },
    ],
    "AI & Machine Learning": [
      { title: "Intro to Machine Learning", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Advanced AI Programming", duration: "6 Weeks" },
      { title: "Deep Learning in Python", duration: "5 Weeks" },
      { title: "Reinforcement Learning Techniques", duration: "7 Weeks" },
      { title: "AI in Business Strategy", duration: "4 Weeks", badge: "Trending Now" },
      { title: "Building AI Models", duration: "6 Weeks" },
      { title: "AI in Healthcare Applications", duration: "6 Weeks" },
      { title: "Predictive Analytics with AI", duration: "5 Weeks", badge: "Popular" },
      { title: "AI for Robotics", duration: "6 Weeks" },
      { title: "AI Ethics in Machine Learning", duration: "3 Weeks" },
      { title: "AI for Marketing", duration: "4 Weeks" },
      { title: "AI and Data Privacy", duration: "5 Weeks", badge: "Emerging" },
    ],
    "Data Science & Business Analytics": [
      { title: "Data Science for Beginners", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Advanced Data Analytics", duration: "6 Weeks" },
      { title: "Business Intelligence with Python", duration: "5 Weeks" },
      { title: "Data Science in Business", duration: "5 Weeks", badge: "Trending Now" },
      { title: "Big Data Analytics", duration: "7 Weeks" },
      { title: "AI in Business Analytics", duration: "6 Weeks" },
      { title: "Data Visualization Techniques", duration: "4 Weeks" },
      { title: "Data Science & Cloud Computing", duration: "6 Weeks" },
      { title: "Statistical Analysis in Python", duration: "4 Weeks" },
      { title: "Predictive Analytics for Business", duration: "5 Weeks", badge: "Popular" },
      { title: "Data Science Project Management", duration: "6 Weeks" },
      { title: "Data Science for Marketing", duration: "5 Weeks", badge: "Emerging" },
    ],
    "Project Management": [
      { title: "Project Management Foundations", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Agile Project Management", duration: "6 Weeks", badge: "Trending Now" },
      { title: "Advanced Project Management Techniques", duration: "5 Weeks" },
      { title: "Managing Cross-Functional Teams", duration: "4 Weeks" },
      { title: "Project Risk Management", duration: "5 Weeks" },
      { title: "Project Scheduling and Time Management", duration: "6 Weeks" },
      { title: "Change Management in Projects", duration: "4 Weeks" },
      { title: "Project Management for IT", duration: "6 Weeks", badge: "Popular" },
      { title: "Project Management in Healthcare", duration: "5 Weeks" },
      { title: "Project Leadership Essentials", duration: "4 Weeks" },
      { title: "Managing Remote Teams", duration: "5 Weeks", badge: "Advanced" },
      { title: "Project Cost Management", duration: "4 Weeks" },
    ],
    "Cloud Computing & DevOps": [
      { title: "Introduction to Cloud Computing", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Cloud Security Essentials", duration: "6 Weeks" },
      { title: "AWS Solutions Architect", duration: "7 Weeks", badge: "Trending Now" },
      { title: "Google Cloud Platform", duration: "5 Weeks" },
      { title: "DevOps for Beginners", duration: "6 Weeks" },
      { title: "CI/CD in Cloud", duration: "5 Weeks" },
      { title: "Building Cloud Infrastructure", duration: "6 Weeks" },
      { title: "DevOps Automation", duration: "4 Weeks", badge: "Popular" },
      { title: "Kubernetes and Docker", duration: "5 Weeks" },
      { title: "Azure Cloud Developer", duration: "6 Weeks" },
      { title: "Serverless Computing", duration: "4 Weeks" },
      { title: "Cloud Data Engineering", duration: "6 Weeks" },
    ],
    "Agile and Scrum": [
      { title: "Scrum Fundamentals", duration: "3 Weeks", badge: "Most Popular" },
      { title: "Agile Methodologies", duration: "5 Weeks" },
      { title: "Advanced Scrum Master Certification", duration: "4 Weeks" },
      { title: "Agile Project Management", duration: "6 Weeks" },
      { title: "Kanban for Agile", duration: "4 Weeks" },
      { title: "Agile Coaching", duration: "5 Weeks", badge: "Trending Now" },
      { title: "Scrum for Product Owners", duration: "4 Weeks" },
      { title: "Agile Metrics and Reporting", duration: "5 Weeks" },
      { title: "Agile Testing and Quality Assurance", duration: "6 Weeks" },
      { title: "Lean Agile Development", duration: "5 Weeks" },
      { title: "Agile Leadership", duration: "6 Weeks", badge: "Popular" },
      { title: "Agile Transformation", duration: "4 Weeks" },
    ],
    "IT Service and Architecture": [
      { title: "ITIL® 4 Foundation", duration: "2 Weeks", badge: "Most Popular" },
      { title: "TOGAF® Training", duration: "2 Weeks", badge: "Trending Now" },
      { title: "ITIL® 4 Specialist", duration: "2 Weeks" },
      { title: "ServiceNow Implementation", duration: "5 Weeks" },
      { title: "IT Architecture Fundamentals", duration: "6 Weeks" },
      { title: "ITSM with ITIL", duration: "4 Weeks" },
      { title: "IT Service Management Essentials", duration: "3 Weeks" },
      { title: "Cybersecurity for IT Architects", duration: "6 Weeks" },
      { title: "Cloud Computing in ITIL", duration: "4 Weeks" },
      { title: "Enterprise Architecture Frameworks", duration: "5 Weeks" },
      { title: "ITIL® for IT Professionals", duration: "4 Weeks" },
      { title: "IT Operations Management", duration: "5 Weeks" },
    ],
    "Cyber Security": [
      { title: "Cybersecurity Fundamentals", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Ethical Hacking", duration: "6 Weeks" },
      { title: "Advanced Cybersecurity Practices", duration: "6 Weeks" },
      { title: "Cloud Security Essentials", duration: "5 Weeks" },
      { title: "Penetration Testing", duration: "5 Weeks" },
      { title: "Network Security Fundamentals", duration: "4 Weeks" },
      { title: "Cybersecurity Risk Management", duration: "5 Weeks" },
      { title: "Security Operations Center", duration: "6 Weeks" },
      { title: "Malware Analysis", duration: "5 Weeks" },
      { title: "Security Architecture", duration: "6 Weeks", badge: "Trending Now" },
      { title: "Incident Response", duration: "4 Weeks" },
      { title: "Cybersecurity for Enterprises", duration: "6 Weeks" },
    ],
    "Business and Leadership": [
      { title: "Business Leadership 101", duration: "4 Weeks", badge: "Most Popular" },
      { title: "Strategic Management", duration: "5 Weeks" },
      { title: "Leadership in Business", duration: "4 Weeks" },
      { title: "Negotiation Skills", duration: "5 Weeks" },
      {title: "Project Leadership", duration: "6 Weeks" }, 
      { title: "Business Ethics and Compliance", duration: "4 Weeks" }, 
      { title: "Executive Leadership Program", duration: "6 Weeks" }, 
      { title: "Organizational Behavior", duration: "5 Weeks" }, 
      { title: "Business Communications", duration: "4 Weeks" }, 
      { title: "Leadership for Managers", duration: "5 Weeks", badge: "Trending Now" }, 
      { title: "Digital Transformation Leadership", duration: "6 Weeks" }, 
      { title: "Global Leadership", duration: "4 Weeks" }, ], 
      "Software Development": [ 
        { title: "Intro to Software Development", duration: "4 Weeks", badge: "Most Popular" }, 
        { title: "Web Development with Python", duration: "5 Weeks" }, 
        { title: "JavaScript for Developers", duration: "6 Weeks" }, 
        { title: "Mobile App Development", duration: "6 Weeks" }, 
        { title: "Full Stack Web Development", duration: "8 Weeks" }, 
        { title: "Advanced Java Programming", duration: "5 Weeks" }, 
        { title: "API Development with Node.js", duration: "6 Weeks" }, 
        { title: "Cloud-based Application Development", duration: "5 Weeks" }, 
        { title: "Object-Oriented Programming", duration: "4 Weeks" }, 
        { title: "React and Redux Development", duration: "6 Weeks" }, 
        { title: "Software Development Practices", duration: "5 Weeks" }, 
        { title: "C++ for Software Development", duration: "6 Weeks" }, ], 
        
        "Product and Design": [    
          { title: "Product Design Fundamentals", duration: "4 Weeks", badge: "Most Popular" }, 
          { title: "UX/UI Design", duration: "5 Weeks" }, { title: "Product Management Essentials", duration: "5 Weeks" }, { title: "Design Thinking", duration: "4 Weeks" }, { title: "User Research Techniques", duration: "5 Weeks" }, { title: "Wireframing and Prototyping", duration: "6 Weeks" }, { title: "Agile Product Design", duration: "6 Weeks" }, { title: "Digital Product Strategy", duration: "4 Weeks" }, { title: "Product Development Life Cycle", duration: "5 Weeks" }, { title: "UX/UI for Mobile Apps", duration: "6 Weeks" }, { title: "Design Systems for Products", duration: "4 Weeks" }, { title: "Advanced Product Management", duration: "6 Weeks" }, ], "Quality Management": [ { title: "Quality Management Basics", duration: "4 Weeks", badge: "Most Popular" }, { title: "Lean Six Sigma", duration: "6 Weeks" }, { title: "Project Quality Management", duration: "5 Weeks" }, { title: "Advanced Quality Control", duration: "6 Weeks" }, { title: "Total Quality Management", duration: "5 Weeks" }, { title: "ISO 9001 Certification", duration: "4 Weeks" }, { title: "Quality Assurance for Projects", duration: "6 Weeks" }, { title: "Quality Risk Management", duration: "5 Weeks" }, { title: "Kaizen Methodology", duration: "4 Weeks" }, { title: "Statistical Quality Control", duration: "6 Weeks" }, { title: "Six Sigma Green Belt", duration: "6 Weeks" }, { title: "Root Cause Analysis", duration: "4 Weeks" }, ], "Digital Marketing": [ { title: "Digital Marketing Essentials", duration: "4 Weeks", badge: "Most Popular" }, { title: "SEO for Marketers", duration: "5 Weeks" }, { title: "Social Media Marketing", duration: "5 Weeks" }, { title: "Content Marketing", duration: "6 Weeks" }, { title: "PPC Advertising", duration: "4 Weeks" }, { title: "Email Marketing Strategies", duration: "6 Weeks" }, { title: "Digital Analytics", duration: "5 Weeks" }, { title: "E-commerce Marketing", duration: "5 Weeks" }, { title: "Affiliate Marketing", duration: "4 Weeks" }, { title: "Influencer Marketing", duration: "5 Weeks" }, { title: "Marketing Automation", duration: "6 Weeks" }, { title: "Brand Management", duration: "4 Weeks" }, ] };

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
            className="absolute top-full left-0 w-full h-[550px] bg-white shadow-lg p-6 z-50 flex"
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Left: Scrollable Categories */}
            <div className="w-1/4 border-r overflow-y-auto max-h-[480px] p-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`p-2 text-gray-800 cursor-pointer hover:bg-gray-200 ${
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
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-between min-h-[150px]" // Set a minimum height for the cards
              >
                <h4 className="font-semibold">{course.title}</h4>
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
