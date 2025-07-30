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
    <section className="max-w-7xl mx-auto p-6 my-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-orange-600 drop-shadow-sm">
        Select a Class
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {classes.map((item) => {
          const isJunior = ['play', 'nursery', 'kg'].includes(item.id)
          const borderColor = isJunior ? 'border-l-8 border-green-500' : 'border-l-8 border-orange-500'
          const bgHover = isJunior ? 'hover:bg-green-50' : 'hover:bg-orange-50'
          const borderHover = isJunior ? 'hover:border-green-600' : 'hover:border-orange-600'
          const badgeBg = isJunior ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'
          const buttonGradient = isJunior
            ? 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 focus:ring-green-300'
            : 'bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:ring-orange-300'

          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`
                bg-white border border-gray-200 rounded-xl shadow-md
                cursor-pointer
                transition-all duration-300 ease-in-out
                hover:shadow-xl
                hover:translate-x-1 hover:-translate-y-1
                flex flex-col p-6
                ${borderColor} ${bgHover} ${borderHover}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full select-none ${badgeBg}`}>
                  {isJunior ? 'Junior' : 'Primary'}
                </span>
              </div>
              <p className="text-gray-700 flex-grow">{item.desc}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleClick(item.id)
                }}
                className={`
                  mt-6
                  text-white font-semibold py-2 rounded-lg shadow-md
                  transition transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4
                  ${buttonGradient}
                `}
              >
                View Students
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
