'use client'
import React from 'react'

const classes = [
  { id: 'play', name: 'Play', desc: 'Fun early learning class.' },
  { id: 'nursery', name: 'Nursery', desc: 'Start your education journey.' },
  { id: 'kg', name: 'KG', desc: 'Kindergarten for basic growth.' },
  { id: 'class1', name: 'Class 1', desc: 'Primary start.' },
  { id: 'class2', name: 'Class 2', desc: 'Foundational learning.' },
  { id: 'class3', name: 'Class 3', desc: 'Building knowledge.' },
  { id: 'class4', name: 'Class 4', desc: 'Upper primary class.' },
  { id: 'class5', name: 'Class 5', desc: 'Preparation for higher levels.' },
]

export default function ClassCards() {
  const handleClick = (classId) => {
    alert(`You clicked on ${classId}`)
  }

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md">
        Select a Class
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {classes.map((item, index) => (
          <div
            key={item.id}
            className="bg-white border border-blue-300 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => handleClick(item.id)}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-blue-900">{item.name}</h2>
                <span
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    index < 3
                      ? 'bg-blue-500 text-white'
                      : 'bg-green-500 text-white'
                  } select-none`}
                >
                  {index < 3 ? 'Junior' : 'Primary'}
                </span>
              </div>
              <p className="text-gray-600 flex-grow">{item.desc}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick(item.id)
                }}
                className="mt-6 bg-orange-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
              >
                View Students
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
