"use client";


import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import DropdownMenu from "@/components/DropdownMenu";
import Navbar  from "@/components/navbar";
// import Navbar from '../components/navbar';


export default function Home() {

  
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section 
        className="text-white text-center py-36  px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      >
        <h1 className="text-5xl font-bold">Become an AI Expert</h1>
        <p className="text-lg mt-4">Accelerate your career with top-tier coding bootcamps.</p>
        <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-r from-blue-300 to-blue-400 shadow-md p-8 rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold">Industry-Leading Curriculum</h2>
          <p className="mt-3 text-lg">Master the latest technologies with our cutting-edge syllabus.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-300 to-green-400 shadow-md p-8 rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold">Expert Instructors</h2>
          <p className="mt-3 text-lg">Learn from professionals with real-world experience.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-300 to-purple-400 shadow-md p-8 rounded-xl text-center text-white">
          <h2 className="text-3xl font-bold">Career Support</h2>
          <p className="mt-3 text-lg">Get job-ready with resume assistance and interview prep.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-200 py-16 text-center px-6">
        <h2 className="text-3xl font-bold">What Our Students Say</h2>
        <p className="max-w-4xl mx-auto mt-4 text-gray-700">
        &quot;This bootcamp changed my life! I landed a tech job within 3 months of graduating.&quot;
        </p>
        <p className="mt-2 font-semibold">- Alex Johnson, Software Engineer</p>
      </section>
    </div>
  );
}
