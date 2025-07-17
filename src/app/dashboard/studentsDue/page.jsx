'use client';
import Link from 'next/link';
import React, { useState } from 'react';

/* ---------- student data ---------- */
const students = [
  { id: 1, name: 'Tanvir Rahman', class: 'Class 10', due: 2500, phone: '017xxxxxxx1', status: 'Due' },
  { id: 2, name: 'Mim Akter', class: 'Class 9', due: 0, phone: '018xxxxxxx2', status: 'Paid' },
  { id: 3, name: 'Riyad Hasan', class: 'Class 8', due: 1500, phone: '019xxxxxxx3', status: 'Due' },
  { id: 4, name: 'Nadia Islam', class: 'Class 7', due: 0, phone: '016xxxxxxx4', status: 'Paid' },
  { id: 5, name: 'Fahim Rahman', class: 'Class 10', due: 3000, phone: '015xxxxxxx5', status: 'Due' },
  { id: 6, name: 'Rupa Khatun', class: 'Class 9', due: 1000, phone: '017xxxxxxx6', status: 'Due' },
];

const ITEMS_PER_PAGE = 5;

export default function StudentDueList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [statusData, setStatusData] = useState(
    students.reduce((acc, s) => { acc[s.id] = s.status; return acc; }, {})
  );

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const currentStudents = students.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const selectedStudent = students.find(s => s.id === selectedId);

  function goToPage(p) { setCurrentPage(p); setSelectedId(null); }
  function changeStatus(id, val) { setStatusData(prev => ({ ...prev, [id]: val })); }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white text-black relative">
      <h2 className="text-3xl font-bold text-center mb-6">Student Due List</h2>
      <Link href="/dashboard/studentfee"><button className='btn btn-primary absolute top-8 right-4'>Take Student Fee</button></Link>

      {/* ------------ list ------------- */}
      {!selectedStudent && (
        <>
          <div className="overflow-x-auto border rounded-lg bg-white">
            <table className="table table-zebra w-full text-sm sm:text-base">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Due (৳)</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map(s => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.class}</td>
                    <td>{s.due.toLocaleString()}</td>
                    <td>{s.phone}</td>
                    <td>
                      <div className="flex space-x-3 justify-center">
                        {['Due', 'Paid'].map(st => (
                          <label key={st} className="flex items-center space-x-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`status-${s.id}`}
                              value={st}
                              checked={statusData[s.id] === st}
                              onChange={() => changeStatus(s.id, st)}
                              className={`radio ${st === 'Paid' ? 'checked:bg-green-500' : 'checked:bg-red-500'}`}
                            />
                            <span className="text-sm">{st}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline btn-info"
                        onClick={() => setSelectedId(s.id)}
                      >
                        View&nbsp;Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            <button
              className="btn btn-sm btn-outline"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >Prev</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`btn btn-sm ${p === currentPage ? 'btn-primary' : 'btn-outline'}`}
              >{p}</button>
            ))}
            <button
              className="btn btn-sm btn-outline"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >Next</button>
          </div>
        </>
      )}

      {/* ------------ detail panel ------------- */}
      {selectedStudent && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4">
            Details for: {selectedStudent.name}
          </h3>

          <div className="grid grid-cols-1 gap-4 text-sm">
            <p><strong>Class:</strong> {selectedStudent.class}</p>
            <p><strong>Due:</strong> {selectedStudent.due.toLocaleString()} ৳</p>
            <p><strong>Phone:</strong> {selectedStudent.phone}</p>
            <div>
              <strong>Status:</strong>
              <div className="flex items-center space-x-6 mt-2">
                {['Due', 'Paid'].map(st => (
                  <label key={st} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="detail-status"
                      value={st}
                      checked={statusData[selectedStudent.id] === st}
                      onChange={() => changeStatus(selectedStudent.id, st)}
                      className={`radio ${st === 'Paid' ? 'checked:bg-green-500' : 'checked:bg-red-500'}`}
                    />
                    <span>{st}</span>
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
            >Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
