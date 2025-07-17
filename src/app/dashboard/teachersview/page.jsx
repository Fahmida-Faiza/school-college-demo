'use client';
import Link from 'next/link';
import React, { useState } from 'react';

/* ---------- 17 demo teachers ---------- */
const teachers = [
  {
    id: 1,
    name: 'Md. Rafiq Hasan',
    fatherName: 'Abdul Karim',
    motherName: 'Rokeya Begum',
    dob: '1990-05-12',
    qualification: 'MSc in Math',
    email: 'rafiq@gmail.com',
    phone: '017xxxxxxxx',
    bloodGroup: 'A+',
    presentAddress: 'Dhaka',
    permanentAddress: 'Barisal',
    nid: '1234567890',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Afsana Jahan',
    fatherName: 'Shamsul Alam',
    motherName: 'Nazma Khatun',
    dob: '1992-08-21',
    qualification: 'MA in English',
    email: 'afsana@gmail.com',
    phone: '018xxxxxxxx',
    bloodGroup: 'B+',
    presentAddress: 'Chittagong',
    permanentAddress: 'Sylhet',
    nid: '9876543210',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Sajib Ahmed',
    fatherName: 'Mizanur Rahman',
    motherName: 'Farida Begum',
    dob: '1988-11-15',
    qualification: 'BSc in Computer Science',
    email: 'sajib@gmail.com',
    phone: '019xxxxxxxx',
    bloodGroup: 'O+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Dinajpur',
    nid: '1122334455',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Nusrat Jahan',
    fatherName: 'Abdul Halim',
    motherName: 'Laila Begum',
    dob: '1991-07-09',
    qualification: 'MEd in Education',
    email: 'nusrat@gmail.com',
    phone: '016xxxxxxxx',
    bloodGroup: 'AB+',
    presentAddress: 'Khulna',
    permanentAddress: 'Jessore',
    nid: '6677889900',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Rana Biswas',
    fatherName: 'Kamal Biswas',
    motherName: 'Sumaiya Biswas',
    dob: '1985-03-23',
    qualification: 'PhD in Physics',
    email: 'rana@gmail.com',
    phone: '015xxxxxxxx',
    bloodGroup: 'B-',
    presentAddress: 'Sylhet',
    permanentAddress: 'Moulvibazar',
    nid: '5544332211',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Farhana Akter',
    fatherName: 'Sajjad Hossain',
    motherName: 'Rupa Akter',
    dob: '1993-01-30',
    qualification: 'MA in Bengali',
    email: 'farhana@gmail.com',
    phone: '017xxxxxxxx',
    bloodGroup: 'O-',
    presentAddress: 'Barisal',
    permanentAddress: 'Patuakhali',
    nid: '9988776655',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Tanvir Islam',
    fatherName: 'Salim Uddin',
    motherName: 'Hasina Islam',
    dob: '1987-12-05',
    qualification: 'MBA',
    email: 'tanvir@gmail.com',
    phone: '019xxxxxxxx',
    bloodGroup: 'A-',
    presentAddress: 'Chittagong',
    permanentAddress: 'Cox’s Bazar',
    nid: '2233445566',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Jannatul Ferdous',
    fatherName: 'Hasan Ali',
    motherName: 'Selina Ferdous',
    dob: '1990-06-20',
    qualification: 'BBA',
    email: 'jannatul@gmail.com',
    phone: '018xxxxxxx8',
    bloodGroup: 'B+',
    presentAddress: 'Dhaka',
    permanentAddress: 'Tangail',
    nid: '1010101010',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Imran Hossain',
    fatherName: 'Fakir Hossain',
    motherName: 'Nasima Hossain',
    dob: '1989-09-15',
    qualification: 'MSc in Chemistry',
    email: 'imran@gmail.com',
    phone: '019xxxxxxx9',
    bloodGroup: 'O+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Pabna',
    nid: '1212121212',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Sabina Yasmin',
    fatherName: 'Mahmudul Hasan',
    motherName: 'Rina Yasmin',
    dob: '1992-04-02',
    qualification: 'MA in History',
    email: 'sabina@gmail.com',
    phone: '017xxxxxxx0',
    bloodGroup: 'A+',
    presentAddress: 'Chittagong',
    permanentAddress: 'Bandarban',
    nid: '1313131313',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Rakibul Islam',
    fatherName: 'Kamal Uddin',
    motherName: 'Sanjida Islam',
    dob: '1986-07-22',
    qualification: 'BSc in Physics',
    email: 'rakibul@gmail.com',
    phone: '016xxxxxxx1',
    bloodGroup: 'AB-',
    presentAddress: 'Sylhet',
    permanentAddress: 'Habiganj',
    nid: '1414141414',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Taslima Akter',
    fatherName: 'Nurul Islam',
    motherName: 'Farzana Akter',
    dob: '1991-12-12',
    qualification: 'MEd',
    email: 'taslima@gmail.com',
    phone: '018xxxxxxx2',
    bloodGroup: 'B+',
    presentAddress: 'Khulna',
    permanentAddress: 'Bagerhat',
    nid: '1515151515',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 13,
    name: 'Shahidul Islam',
    fatherName: 'Jamal Uddin',
    motherName: 'Morsheda Islam',
    dob: '1987-03-08',
    qualification: 'MBA',
    email: 'shahidul@gmail.com',
    phone: '019xxxxxxx3',
    bloodGroup: 'O-',
    presentAddress: 'Barisal',
    permanentAddress: 'Bhola',
    nid: '1616161616',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 14,
    name: 'Moushumi Begum',
    fatherName: 'Abdul Majid',
    motherName: 'Rokeya Begum',
    dob: '1994-05-29',
    qualification: 'BSc in Biology',
    email: 'moushumi@gmail.com',
    phone: '017xxxxxxx4',
    bloodGroup: 'A+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Naogaon',
    nid: '1717171717',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 15,
    name: 'Nayeem Hasan',
    fatherName: 'Anwar Hasan',
    motherName: 'Salma Hasan',
    dob: '1985-11-10',
    qualification: 'MSc in Math',
    email: 'nayeem@gmail.com',
    phone: '016xxxxxxx5',
    bloodGroup: 'B-',
    presentAddress: 'Dhaka',
    permanentAddress: 'Gazipur',
    nid: '1818181818',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 16,
    name: 'Rokeya Sultana',
    fatherName: 'Azizur Rahman',
    motherName: 'Jahanara Begum',
    dob: '1990-08-18',
    qualification: 'MA in English',
    email: 'rokeya@gmail.com',
    phone: '018xxxxxxx6',
    bloodGroup: 'O+',
    presentAddress: 'Khulna',
    permanentAddress: 'Jessore',
    nid: '1919191919',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 17,
    name: 'Jahidul Islam',
    fatherName: 'Mofizur Rahman',
    motherName: 'Fatema Begum',
    dob: '1988-02-25',
    qualification: 'BSc in Physics',
    email: 'jahidul@gmail.com',
    phone: '019xxxxxxx7',
    bloodGroup: 'AB+',
    presentAddress: 'Chittagong',
    permanentAddress: 'Feni',
    nid: '2020202020',
    photo: 'https://via.placeholder.com/150',
  },
];

const ITEMS_PER_PAGE = 5;

/* ------------------- component ------------------- */
export default function TeacherTable() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedTeacher = teachers.find((t) => t.id === selectedId);

  /* pagination */
  const totalPages = Math.ceil(teachers.length / ITEMS_PER_PAGE);
  const currentTeachers = teachers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  function goToPage(page) {
    setCurrentPage(page);
    setSelectedId(null);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black relative">
      <h2 className="text-3xl font-bold text-center mb-6">Teachers</h2>
      <Link href="/dashboard/teacher"><button className='btn btn-primary absolute top-8 right-4'>Add Teacher</button></Link>


      {/* ---------- table ---------- */}
      <div className="overflow-x-auto border rounded-lg bg-white">
        <table className="table table-zebra w-full text-sm sm:text-base">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Qualification</th>
              <th>Phone</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {currentTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td>{teacher.name}</td>
                <td>{teacher.qualification}</td>
                <td>{teacher.phone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => setSelectedId(teacher.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- pagination ---------- */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          className="btn btn-sm btn-outline"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`btn btn-sm ${page === currentPage ? 'btn-primary' : 'btn-outline'
              }`}
          >
            {page}
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

      {/* ---------- detail panel ---------- */}
      {selectedTeacher && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">
            Details for: {selectedTeacher.name}
          </h3>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src={selectedTeacher.photo}
                alt={selectedTeacher.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover border"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
              <p>
                <strong>Father&apos;s Name:</strong> {selectedTeacher.fatherName}
              </p>
              <p>
                <strong>Mother&apos;s Name:</strong> {selectedTeacher.motherName}
              </p>
              <p>
                <strong>Date of Birth:</strong> {selectedTeacher.dob}
              </p>
              <p>
                <strong>Email:</strong> {selectedTeacher.email}
              </p>
              <p>
                <strong>Blood Group:</strong> {selectedTeacher.bloodGroup}
              </p>
              <p>
                <strong>Present Address:</strong>{' '}
                {selectedTeacher.presentAddress}
              </p>
              <p>
                <strong>Permanent Address:</strong>{' '}
                {selectedTeacher.permanentAddress}
              </p>
              <p>
                <strong>NID:</strong> {selectedTeacher.nid}
              </p>
            </div>
          </div>

          {/* action buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
            <button className="btn btn-sm btn-warning w-full sm:w-auto">
              Update
            </button>
            <button className="btn btn-sm btn-error w-full sm:w-auto">
              Delete
            </button>
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
