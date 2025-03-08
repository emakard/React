"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function ApplyForm() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Apply Now</h2>
        <form>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="First Name" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Last Name" className="border p-3 rounded-lg w-full" />
            <input type="email" placeholder="Email" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Phone Number" className="border p-3 rounded-lg w-full" />
            <input type="text" placeholder="Zip Code" className="border p-3 rounded-lg w-full" />
            <select className="border p-3 rounded-lg w-full">
              <option>Choose your program</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Cybersecurity</option>
            </select>
            <div>
              <p className="text-gray-700">Are you a military veteran or active military personnel?</p>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="military" value="yes" className="h-4 w-4" /> Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="military" value="no" className="h-4 w-4" /> No
                </label>
              </div>
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600 text-sm">I consent to receive calls or text messages from Strategism.</span>
            </label>
            <button type="submit" className="bg-red-500 text-white p-3 rounded-lg font-semibold w-full hover:bg-red-600">NEXT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
