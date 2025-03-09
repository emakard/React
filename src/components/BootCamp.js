"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Navbar  from "@/components/navbar";


const curriculum = [
  { week: 1, title: "Foundations of Neural Networks", description: "Introduction to deep learning, neural networks, and backpropagation." },
  { week: 2, title: "Deep Neural Networks & Optimization", description: "Exploring deep neural network architectures and optimization techniques." },
  { week: 3, title: "Introduction to Transformers", description: "Understanding the self-attention mechanism and transformer architecture." },
  { week: 4, title: "Deep Dive into GPT-2 Architecture", description: "Breaking down GPT-2 components and tokenization techniques." },
  { week: 5, title: "Building GPT-2 from Scratch", description: "Training, optimization, and scaling of GPT-2 models." },
  { week: 6, title: "Deployment & Capstone Project", description: "Model compression, deployment, and student project presentations." }
];

export default function CurriculumPage() {
  return (

    <div>
      {/* Navbar outside the container to take full width */}
      <Navbar className="w-full mb-10" />
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
        AI Bootcamp Curriculum
      </h1>
      <p className="text-lg text-center mb-8 text-gray-700">A six-week deep dive into neural networks, transformers, and GPT-2.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {curriculum.map((week) => (
          <motion.div key={week.week} whileHover={{ scale: 1.05 }}>
            <Card className="p-4 shadow-xl rounded-2xl border border-gray-300 flex flex-col justify-between">
              <CardContent className="flex-grow">
                <h2 className="text-2xl font-semibold text-indigo-600 mb-3">{`Week ${week.week}: ${week.title}`}</h2>
                <p className="text-gray-600 text-sm mb-4">{week.description}</p>
                <Link href={`/week/${week.week}`} className="text-indigo-600 hover:underline">View Details →</Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
