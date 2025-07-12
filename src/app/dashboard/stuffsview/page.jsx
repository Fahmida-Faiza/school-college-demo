'use client';
import React, { useState } from 'react';

const staffs = [
  {
    id: 1,
    name: 'Rahim Uddin',
    fatherName: 'Abdul Latif',
    motherName: 'Fatema Begum',
    dob: '1980-03-12',
    qualification: 'BSc in Management',
    email: 'rahim@gmail.com',
    phone: '017xxxxxxx1',
    bloodGroup: 'A+',
    presentAddress: 'Dhaka',
    permanentAddress: 'Gazipur',
    nid: '1234567890123',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Salma Akter',
    fatherName: 'Mizanur Rahman',
    motherName: 'Ayesha Khatun',
    dob: '1985-07-19',
    qualification: 'MA in Accounting',
    email: 'salma@gmail.com',
    phone: '018xxxxxxx2',
    bloodGroup: 'B+',
    presentAddress: 'Chittagong',
    permanentAddress: 'Cox’s Bazar',
    nid: '9876543210987',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Jahid Hossain',
    fatherName: 'Abdul Hannan',
    motherName: 'Rehana Begum',
    dob: '1990-01-23',
    qualification: 'MBA',
    email: 'jahid@gmail.com',
    phone: '019xxxxxxx3',
    bloodGroup: 'O+',
    presentAddress: 'Sylhet',
    permanentAddress: 'Habiganj',
    nid: '1122334455667',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Farida Parvin',
    fatherName: 'Salim Uddin',
    motherName: 'Nasima Begum',
    dob: '1988-11-11',
    qualification: 'MEd',
    email: 'farida@gmail.com',
    phone: '016xxxxxxx4',
    bloodGroup: 'AB+',
    presentAddress: 'Rajshahi',
    permanentAddress: 'Naogaon',
    nid: '5566778899001',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Kamal Hossain',
    fatherName: 'Nurul Islam',
    motherName: 'Rokeya Begum',
    dob: '1983-05-05',
    qualification: 'PhD in Management',
    email: 'kamal@gmail.com',
    phone: '015xxxxxxx5',
    bloodGroup: 'B-',
    presentAddress: 'Khulna',
    permanentAddress: 'Jessore',
    nid: '6677889900112',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Rina Akhter',
    fatherName: 'Mofizur Rahman',
    motherName: 'Shahida Begum',
    dob: '1987-09-09',
    qualification: 'BA in English',
    email: 'rina@gmail.com',
    phone: '017xxxxxxx6',
    bloodGroup: 'O-',
    presentAddress: 'Barisal',
    permanentAddress: 'Patuakhali',
    nid: '7788990011223',
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
    phone: '019xxxxxxx7',
    bloodGroup: 'A-',
    presentAddress: 'Chittagong',
    permanentAddress: 'Cox’s Bazar',
    nid: '2233445566778',
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
    nid: '1010101010101',
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
    nid: '1212121212121',
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
    nid: '1313131313131',
    photo: 'https://via.placeholder.com/150',
  },
];

const ITEMS_PER_PAGE = 5;

export default function StaffView() {
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const selectedStaff = staffs.find((s) => s.id === selectedId);

  const totalPages = Math.ceil(staffs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStaffs = staffs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  function goToPage(page) {
    setCurrentPage(page);
    setSelectedId(null);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-6">Staffs</h2>

      {/* Table */}
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
            {currentStaffs.map((staff) => (
              <tr key={staff.id}>
                <td>
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td>{staff.name}</td>
                <td>{staff.qualification}</td>
                <td>{staff.phone}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline btn-info"
                    onClick={() => setSelectedId(staff.id)}
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

      {/* Details Section */}
      {selectedStaff && (
        <div className="mt-8 p-6 bg-white border rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">Details for: {selectedStaff.name}</h3>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Full Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={selectedStaff.photo}
                alt={selectedStaff.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover border"
              />
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm w-full">
              <p><strong>Father's Name:</strong> {selectedStaff.fatherName}</p>
              <p><strong>Mother's Name:</strong> {selectedStaff.motherName}</p>
              <p><strong>Date of Birth:</strong> {selectedStaff.dob}</p>
              <p><strong>Email:</strong> {selectedStaff.email}</p>
              <p><strong>Blood Group:</strong> {selectedStaff.bloodGroup}</p>
              <p><strong>Present Address:</strong> {selectedStaff.presentAddress}</p>
              <p><strong>Permanent Address:</strong> {selectedStaff.permanentAddress}</p>
              <p><strong>NID:</strong> {selectedStaff.nid}</p>
              <p><strong>Phone:</strong> {selectedStaff.phone}</p>
            </div>
          </div>

          {/* Action Buttons */}
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
