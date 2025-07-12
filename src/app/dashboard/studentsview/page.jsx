'use client';
import React, { useState } from 'react';

const students = [
  {
    id: 1,
    name: 'Sajib Ahmed',
    roll: '12',
    section: 'A',
    fatherName: 'Mizanur Rahman',
    motherName: 'Farida Begum',
    dob: '2010-11-15',
    className: '6',
    fatherPhone: '019xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'O+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Dinajpur',
    nid: '1122334455',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    roll: '9',
    section: 'B',
    fatherName: 'Abdul Halim',
    motherName: 'Laila Begum',
    dob: '2009-07-09',
    className: '7',
    fatherPhone: '016xxxxxxxx',
    motherPhone: '018xxxxxxxx',
    bloodGroup: 'AB+',
    presentAddress: 'Khulna',
    permanentAddress: 'Jessore',
    nid: '6677889900',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Rana Biswas',
    roll: '5',
    section: 'C',
    fatherName: 'Kamal Biswas',
    motherName: 'Sumaiya Biswas',
    dob: '2011-03-23',
    className: '5',
    fatherPhone: '015xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'B-',
    presentAddress: 'Sylhet',
    permanentAddress: 'Moulvibazar',
    nid: '5544332211',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Farhana Akter',
    roll: '14',
    section: 'A',
    fatherName: 'Sajjad Hossain',
    motherName: 'Rupa Akter',
    dob: '2010-01-30',
    className: '6',
    fatherPhone: '017xxxxxxxx',
    motherPhone: '018xxxxxxxx',
    bloodGroup: 'O-',
    presentAddress: 'Barisal',
    permanentAddress: 'Patuakhali',
    nid: '9988776655',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Tanvir Islam',
    roll: '18',
    section: 'B',
    fatherName: 'Salim Uddin',
    motherName: 'Hasina Islam',
    dob: '2008-12-05',
    className: '8',
    fatherPhone: '019xxxxxxxx',
    motherPhone: '016xxxxxxxx',
    bloodGroup: 'A-',
    presentAddress: 'Chittagong',
    permanentAddress: 'Cox’s Bazar',
    nid: '2233445566',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Imran Hossain',
    roll: '7',
    section: 'C',
    fatherName: 'Jamal Hossain',
    motherName: 'Rina Hossain',
    dob: '2010-05-21',
    className: '6',
    fatherPhone: '018xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'B+',
    presentAddress: 'Dhaka',
    permanentAddress: 'Gazipur',
    nid: '7788990011',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Sharmin Akter',
    roll: '3',
    section: 'B',
    fatherName: 'Abdur Rahman',
    motherName: 'Shahana Rahman',
    dob: '2011-02-12',
    className: '5',
    fatherPhone: '019xxxxxxxx',
    motherPhone: '016xxxxxxxx',
    bloodGroup: 'O+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Pabna',
    nid: '3344556677',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Rakibul Islam',
    roll: '11',
    section: 'A',
    fatherName: 'Mamunur Rashid',
    motherName: 'Hasina Rashid',
    dob: '2009-09-10',
    className: '7',
    fatherPhone: '015xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'AB-',
    presentAddress: 'Chittagong',
    permanentAddress: 'Feni',
    nid: '1122446688',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Ayesha Siddique',
    roll: '6',
    section: 'C',
    fatherName: 'Siddique Ahmed',
    motherName: 'Mim Siddique',
    dob: '2010-07-18',
    className: '6',
    fatherPhone: '018xxxxxxxx',
    motherPhone: '019xxxxxxxx',
    bloodGroup: 'A+',
    presentAddress: 'Sylhet',
    permanentAddress: 'Habiganj',
    nid: '5544778899',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Rafiqur Rahman',
    roll: '17',
    section: 'B',
    fatherName: 'Rahmat Ali',
    motherName: 'Khadiza Rahman',
    dob: '2008-03-03',
    className: '8',
    fatherPhone: '017xxxxxxxx',
    motherPhone: '018xxxxxxxx',
    bloodGroup: 'B+',
    presentAddress: 'Barisal',
    permanentAddress: 'Bhola',
    nid: '2233556677',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Lamia Khatun',
    roll: '4',
    section: 'A',
    fatherName: 'Khaled Khatun',
    motherName: 'Rokeya Khatun',
    dob: '2011-01-27',
    className: '5',
    fatherPhone: '019xxxxxxxx',
    motherPhone: '016xxxxxxxx',
    bloodGroup: 'O-',
    presentAddress: 'Dhaka',
    permanentAddress: 'Narayanganj',
    nid: '6677990011',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Jahid Hasan',
    roll: '15',
    section: 'C',
    fatherName: 'Hasan Ali',
    motherName: 'Salma Hasan',
    dob: '2009-11-14',
    className: '7',
    fatherPhone: '016xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'AB+',
    presentAddress: 'Khulna',
    permanentAddress: 'Bagerhat',
    nid: '9988665544',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 13,
    name: 'Mim Mahmud',
    roll: '10',
    section: 'B',
    fatherName: 'Mahmud Ali',
    motherName: 'Nusrat Mahmud',
    dob: '2010-04-19',
    className: '6',
    fatherPhone: '019xxxxxxxx',
    motherPhone: '018xxxxxxxx',
    bloodGroup: 'A-',
    presentAddress: 'Jessore',
    permanentAddress: 'Jhenaidah',
    nid: '5566778899',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 14,
    name: 'Shakil Ahmed',
    roll: '8',
    section: 'A',
    fatherName: 'Ahmed Ali',
    motherName: 'Fatema Ahmed',
    dob: '2009-06-22',
    className: '7',
    fatherPhone: '017xxxxxxxx',
    motherPhone: '019xxxxxxxx',
    bloodGroup: 'B-',
    presentAddress: 'Rangpur',
    permanentAddress: 'Dinajpur',
    nid: '1122557788',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 15,
    name: 'Tania Sultana',
    roll: '13',
    section: 'C',
    fatherName: 'Sultan Ahmed',
    motherName: 'Nusrat Sultana',
    dob: '2010-10-08',
    className: '6',
    fatherPhone: '015xxxxxxxx',
    motherPhone: '017xxxxxxxx',
    bloodGroup: 'O+',
    presentAddress: 'Mymensingh',
    permanentAddress: 'Netrokona',
    nid: '6677889900',
    photo: 'https://via.placeholder.com/150',
  },
];

const ITEMS_PER_PAGE = 5;

export default function StudentTable() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedStudent = students.find((s) => s.id === selectedId);

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = students.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function goToPage(page) {
    setCurrentPage(page);
    setSelectedId(null);
  }

  if (selectedStudent) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black min-h-screen">
        <button
          className="btn btn-sm btn-outline mb-6"
          onClick={() => setSelectedId(null)}
        >
          ← Back to List
        </button>

        <h3 className="text-3xl font-bold mb-6">Details for: {selectedStudent.name}</h3>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex justify-center lg:justify-start">
            <img
              src={selectedStudent.photo}
              alt={selectedStudent.name}
              className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl object-cover border"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base w-full">
            <p><strong>Roll:</strong> {selectedStudent.roll}</p>
            <p><strong>Section:</strong> {selectedStudent.section}</p>
            <p><strong>Father's Name:</strong> {selectedStudent.fatherName}</p>
            <p><strong>Mother's Name:</strong> {selectedStudent.motherName}</p>
            <p><strong>Date of Birth:</strong> {selectedStudent.dob}</p>
            <p><strong>Class:</strong> {selectedStudent.className}</p>
            <p><strong>Father's Phone:</strong> {selectedStudent.fatherPhone}</p>
            <p><strong>Mother's Phone:</strong> {selectedStudent.motherPhone}</p>
            <p><strong>Blood Group:</strong> {selectedStudent.bloodGroup}</p>
            <p><strong>Present Address:</strong> {selectedStudent.presentAddress}</p>
            <p><strong>Permanent Address:</strong> {selectedStudent.permanentAddress}</p>
            <p><strong>Father/Mother NID:</strong> {selectedStudent.nid}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-10">
          <button className="btn btn-warning w-full sm:w-auto">Update</button>
          <button className="btn btn-error w-full sm:w-auto">Delete</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Students</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="table w-full text-sm sm:text-base">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Section</th>
              <th>Class</th>
              <th>Father Phone</th>
              <th>Mother Phone</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id}>
                <td>
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.roll}</td>
                <td>{student.section}</td>
                <td>{student.className}</td>
                <td>{student.fatherPhone}</td>
                <td>{student.motherPhone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => setSelectedId(student.id)}
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
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className="btn btn-sm btn-outline"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`btn btn-sm ${
                page === currentPage ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          className="btn btn-sm btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
}
