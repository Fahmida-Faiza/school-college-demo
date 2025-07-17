'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const staff = [
  { id: 1, name: 'Rana Biswas', position: 'Office Manager', salary: 28000, phone: '015xxxxxxx1', status: 'Pending' },
  { id: 2, name: 'Farhana Akter', position: 'Accountant', salary: 25000, phone: '017xxxxxxx2', status: 'OK' },
  { id: 3, name: 'Tanvir Islam', position: 'Security Guard', salary: 18000, phone: '019xxxxxxx3', status: 'Pending' },
  { id: 4, name: 'Shahidul Islam', position: 'Cleaner', salary: 15000, phone: '018xxxxxxx4', status: 'OK' },
  { id: 5, name: 'Moushumi Begum', position: 'Library Assistant', salary: 20000, phone: '016xxxxxxx5', status: 'OK' },
  { id: 6, name: 'Nayeem Hasan', position: 'Driver', salary: 22000, phone: '017xxxxxxx6', status: 'Pending' },
];

const ITEMS_PER_PAGE = 5;

export default function StuffsSalaryView() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusData, setStatusData] = useState(
    staff.reduce((acc, s) => {
      acc[s.id] = s.status;
      return acc;
    }, {})
  );

  const selectedStaff = staff.find((s) => s.id === selectedId);
  const totalPages = Math.ceil(staff.length / ITEMS_PER_PAGE);
  const currentStaff = staff.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function goToPage(page) {
    setCurrentPage(page);
    setSelectedId(null);
  }

  function handleStatusChange(id, newStatus) {
    setStatusData((prev) => ({ ...prev, [id]: newStatus }));
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white text-black relative">
      <h2 className="text-3xl font-bold text-center mb-6">Staff Salary View</h2>
      <Link href="/dashboard/staffSalary"><button className='btn btn-accent absolute top-8 right-4'>Pay Staff Salary</button></Link>


      {!selectedId && (
        <>
          <div className="overflow-x-auto border rounded-lg bg-white">
            <table className="table table-zebra w-full text-sm sm:text-base">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Salary (৳)</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {currentStaff.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.position}</td>
                    <td>{s.salary.toLocaleString()}</td>
                    <td>{s.phone}</td>
                    <td>
                      <div className="flex space-x-3 justify-center">
                        {['Pending', 'OK'].map((st) => (
                          <label key={st} className="flex items-center space-x-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`status-${s.id}`}
                              value={st}
                              checked={statusData[s.id] === st}
                              onChange={() => handleStatusChange(s.id, st)}
                              className={`radio ${
                                st === 'OK' ? 'checked:bg-green-500' : 'checked:bg-red-500'
                              }`}
                            />
                            <span className="text-sm">{st === 'OK' ? 'Active' : 'Pending'}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline btn-info"
                        onClick={() => setSelectedId(s.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            <button
              className="btn btn-sm btn-outline"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`btn btn-sm ${i + 1 === currentPage ? 'btn-primary' : 'btn-outline'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="btn btn-sm btn-outline"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Detail View */}
      {selectedStaff && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Details for: {selectedStaff.name}</h3>
          <div className="grid grid-cols-1 gap-4 text-sm">
            <p><strong>Position:</strong> {selectedStaff.position}</p>
            <p><strong>Salary:</strong> {selectedStaff.salary.toLocaleString()} ৳</p>
            <p><strong>Phone:</strong> {selectedStaff.phone}</p>
            <div><strong>Status:</strong>
              <div className="flex items-center space-x-6 mt-2">
                {['Pending', 'OK'].map((st) => (
                  <label key={st} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="detail-status"
                      value={st}
                      checked={statusData[selectedStaff.id] === st}
                      onChange={() => handleStatusChange(selectedStaff.id, st)}
                      className={`radio ${
                        st === 'Pending' ? 'checked:bg-red-500' : 'checked:bg-green-500'
                      }`}
                    />
                    <span>{st === 'OK' ? 'Active' : 'Pending'}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
            <button className="btn btn-sm btn-warning w-full sm:w-auto">Update</button>
            <button className="btn btn-sm btn-error w-full sm:w-auto">Delete</button>
            <button
              className="btn btn-sm btn-outline w-full sm:w-auto"
              onClick={() => setSelectedId(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
