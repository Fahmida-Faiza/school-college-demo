import React from 'react';

function Notice() {
  return (
    <div className="max-w-7xl mx-auto my-32 px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-orange-300 text-black">
          <thead className="bg-orange-400 text-white font-bold text-xl">
            <tr>
              <th className="border border-orange-300 px-4 py-3 text-center">#</th>
              <th className="border border-orange-300 px-6 py-3 text-left">Title</th>
              <th className="border border-orange-300 px-4 py-3 text-center">Publishing Date</th>
              <th className="border border-orange-300 px-6 py-3 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                title: 'এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২',
                date: '17 Jun, 2025',
              },
              {
                id: 2,
                title: 'এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২',
                date: '17 Jun, 2025',
              },
              {
                id: 3,
                title: 'Brice Swyre',
                date: 'Tax Accountant',
              },
              {
                id: 4,
                title: 'এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২',
                date: '17 Jun, 2025',
              },
              {
                id: 5,
                title: 'এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২',
                date: '17 Jun, 2025',
              },
            ].map(({ id, title, date }) => (
              <tr
                key={id}
                className="even:bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
              >
                <td className="border border-orange-300 px-4 py-3 text-center font-semibold">{id}</td>
                <td className="border border-orange-300 px-6 py-3">{title}</td>
                <td className="border border-orange-300 px-4 py-3 text-center">{date}</td>
                <td className="border border-orange-300 px-6 py-3 text-center">
                  <button className="btn btn-warning btn-sm text-white">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-3">
        {[1, 2, 3, 4].map((num) => (
          <input
            key={num}
            type="radio"
            name="pagination"
            aria-label={`Page ${num}`}
            className={`join-item btn btn-square btn-md ${
              num === 1
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-orange-400 text-white border-orange-400 hover:bg-orange-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Notice;
