'use client';
import React, { useState } from 'react';

/* ---------- teacher data (add more if you like) ---------- */
const teachers = [
  { id: 1, name: 'Md. Rafiq Hasan', position: 'Math Teacher',           salary: 35000, phone: '017xxxxxxx1', status: 'Pending' },
  { id: 2, name: 'Afsana Jahan',   position: 'English Teacher',        salary: 32000, phone: '018xxxxxxx2', status: 'OK'      },
  { id: 3, name: 'Sajib Ahmed',    position: 'Computer Science Teacher', salary: 40000, phone: '019xxxxxxx3', status: 'OK'      },
  { id: 4, name: 'Nusrat Jahan',   position: 'Education Teacher',      salary: 30000, phone: '016xxxxxxx4', status: 'Pending' },
  { id: 5, name: 'Rana Biswas',    position: 'Physics Teacher',        salary: 38000, phone: '015xxxxxxx5', status: 'OK'      },
  { id: 6, name: 'Farhana Akter',  position: 'Bengali Teacher',        salary: 31000, phone: '017xxxxxxx6', status: 'Pending' },
];

const ITEMS_PER_PAGE = 5;

/* ---------- component ---------- */
export default function TeacherSalaryView() {
  const [currentPage, setCurrentPage]   = useState(1);
  const [selectedId,  setSelectedId]    = useState(null);
  const [statusData,  setStatusData]    = useState(
    teachers.reduce((acc,t)=>{acc[t.id]=t.status; return acc;}, {})
  );

  /* pagination helpers */
  const totalPages      = Math.ceil(teachers.length / ITEMS_PER_PAGE);
  const currentTeachers = teachers.slice(
    (currentPage-1)*ITEMS_PER_PAGE,
    currentPage*ITEMS_PER_PAGE
  );
  const selectedTeacher = teachers.find(t => t.id === selectedId);

  function goToPage(p){ setCurrentPage(p); setSelectedId(null); }
  function changeStatus(id,val){ setStatusData(prev=>({...prev,[id]:val})); }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-6">Teacher Salary View</h2>

      {/* ------------ list ------------- */}
      {!selectedTeacher && (
        <>
          <div className="overflow-x-auto border rounded-lg bg-white">
            <table className="table table-zebra w-full text-sm sm:text-base">
              <thead className="bg-blue-800 text-white">
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
                {currentTeachers.map(t => (
                  <tr key={t.id}>
                    <td>{t.name}</td>
                    <td>{t.position}</td>
                    <td>{t.salary.toLocaleString()}</td>
                    <td>{t.phone}</td>
                    <td>
                      <div className="flex space-x-3 justify-center">
                        {['Pending','OK'].map(st=>(
                          <label key={st} className="flex items-center space-x-1 cursor-pointer">
                            <input
                              type="radio"
                              name={`status-${t.id}`}
                              value={st}
                              checked={statusData[t.id]===st}
                              onChange={()=>changeStatus(t.id,st)}
                              className={`radio ${st==='OK'?'checked:bg-green-500':'checked:bg-red-500'}`}
                            />
                            <span className="text-sm">{st==='OK'?'Active':'Pending'}</span>
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline btn-info"
                        onClick={()=>setSelectedId(t.id)}
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
              disabled={currentPage===1}
              onClick={()=>goToPage(currentPage-1)}
            >Prev</button>
            {Array.from({length:totalPages},(_,i)=>i+1).map(p=>(
              <button
                key={p}
                onClick={()=>goToPage(p)}
                className={`btn btn-sm ${p===currentPage?'btn-primary':'btn-outline'}`}
              >{p}</button>
            ))}
            <button
              className="btn btn-sm btn-outline"
              disabled={currentPage===totalPages}
              onClick={()=>goToPage(currentPage+1)}
            >Next</button>
          </div>
        </>
      )}

      {/* ------------ detail panel ------------- */}
      {selectedTeacher && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-4">
            Details for: {selectedTeacher.name}
          </h3>

          <div className="grid grid-cols-1 gap-4 text-sm">
            <p><strong>Position:</strong> {selectedTeacher.position}</p>
            <p><strong>Salary:</strong> {selectedTeacher.salary.toLocaleString()} ৳</p>
            <p><strong>Phone:</strong> {selectedTeacher.phone}</p>
            <p>
              <strong>Status:</strong>
              <div className="flex items-center space-x-6 mt-2">
                {['Pending','OK'].map(st=>(
                  <label key={st} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="detail-status"
                      value={st}
                      checked={statusData[selectedTeacher.id]===st}
                      onChange={()=>changeStatus(selectedTeacher.id,st)}
                      className={`radio ${st==='OK'?'checked:bg-green-500':'checked:bg-red-500'}`}
                    />
                    <span>{st==='OK'?'Active':'Pending'}</span>
                  </label>
                ))}
              </div>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
            <button className="btn btn-sm btn-warning w-full sm:w-auto">Update</button>
            <button className="btn btn-sm btn-error w-full sm:w-auto">Delete</button>
            <button
              className="btn btn-sm btn-outline w-full sm:w-auto"
              onClick={()=>setSelectedId(null)}
            >Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
