"use client";

import { useState } from "react";
import Navbar  from "@/components/navbar";


export default function ApplyForm() {
  return (

    <div>
      {/* Navbar outside the container to take full width */}
      <Navbar className="w-full mb-10" />


    <div className="h-screen">
      {/* Top Light Background Section with Strategism Logo */}
      {/* <section className="bg-gray-100 h-1/2 flex justify-center items-center">
        <img
          src="/strategism-logo.png"
          alt="Strategism Logo"
          className="max-w-xs"
        />
      </section> */}

      {/* Bottom Dark Background Section with Start Your Application Text */}
      <section className="bg-gray-900 text-white py-12 flex justify-center items-center">
        <h2 className="text-4xl font-bold">Start Your Application</h2>
      </section>

      {/* Form Section */}
      <div className="flex items-center justify-center -mt-10">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-4xl w-full">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* First Name and Last Name in the Same Row */}
              <input
                type="text"
                placeholder="First Name"
                className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {/* Phone Number and Zip Code in the Same Row */}
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <input
                type="text"
                placeholder="Zip Code"
                className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
            </div>
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mb-4"
            />
            {/* Program Selection */}
            <select className="border p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mb-4">
              <option>Choose your program</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Cybersecurity</option>
            </select>
            {/* Military Question */}
            <div className="mb-4">
              <p className="text-gray-700 text-sm">Are you a military veteran or active military personnel?</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="military" value="yes" className="h-4 w-4" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="military" value="no" className="h-4 w-4" /> No
                </label>
              </div>
            </div>
            {/* Consent Checkbox */}
            <label className="flex items-center gap-2 text-sm mb-6">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600">
                I consent to receive calls or text messages from Strategism.
              </span>
            </label>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white p-4 rounded-lg font-semibold w-full hover:bg-orange-600 transition duration-200 text-sm"
            >
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
