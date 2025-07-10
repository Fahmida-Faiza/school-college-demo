"use client"

import React, { useState } from 'react';

const SalaryForm = () => {
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handlePositionChange = (e) => {
    const selected = e.target.value;
    setPosition(selected);

    if (selected === 'Teacher') {
      setSalary('25000');
    } else if (selected === 'Staff') {
      setSalary('5000');
    } else {
      setSalary('');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 text-black mb-32">
      <div className="card shadow-xl border border-blue-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          💼 Salary Entry
        </h2>

        <form className="flex flex-col gap-5">

          <div className="form-control">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input bg-white input-bordered w-full"
            />
          </div>

          {/* Position Dropdown */}
          <div className="form-control">
            <label className="label font-semibold">Position</label>
            <select
              className="select select-bordered w-full bg-white"
              value={position}
              onChange={handlePositionChange}
            >
              <option disabled value="">Select Position</option>
              <option>Teacher</option>
              <option>Staff</option>
            </select>
          </div>

          {/* Auto-filled Salary */}
          <div className="form-control">
            <label className="label font-semibold">Salary Amount (৳)</label>
            <input
              type="number"
              value={salary}
              readOnly
              className="input input-bordered w-full bg-gray-100 text-gray-700"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="01XXXXXXXXX"
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-success w-full text-lg">Submit Salary</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalaryForm;
