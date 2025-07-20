'use client'
import React from 'react'
// import { BookOpen, School } from 'lucide-react' // optional icons from lucide

const classes = [
  { id: 'play', name: 'Play', desc: 'Fun early learning class.' },
  { id: 'nursery', name: 'Nursery', desc: 'Start your education journey.' },
  { id: 'kg', name: 'KG', desc: 'Kindergarten for basic growth.' },
  { id: 'class1', name: 'Class 1', desc: 'Primary start.' },
  { id: 'class2', name: 'Class 2', desc: 'Foundational learning.' },
  { id: 'class3', name: 'Class 3', desc: 'Building knowledge.' },
  { id: 'class4', name: 'Class 4', desc: 'Upper primary class.' },
  { id: 'class5', name: 'Class 5', desc: 'Preparation for higher levels.' },
];

export default function ClassCards() {
  const handleClick = (classId) => {
    alert(`You clicked on ${classId}`);
    // Optional: router.push(`/students/${classId}`)
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Select a Class</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((item, index) => (
          <div
            key={item.id}
            className="card border border-blue-200 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <h2 className="card-title text-blue-800">{item.name}</h2>
                <div className="badge badge-info text-white">{index < 3 ? 'Junior' : 'Primary'}</div>
              </div>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="card-actions justify-end ">
                <button
                  onClick={() => handleClick(item.id)}
                  className="btn btn-sm btn-success text-white"
                >
                  View Students
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
