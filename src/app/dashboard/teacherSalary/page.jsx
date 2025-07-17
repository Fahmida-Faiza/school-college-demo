
import React from 'react';

const SalaryForm = () => {


  return (
        <div className="max-w-xl mx-auto mt-12 text-black mb-32">
      <div className="card shadow-xl border border-blue-100 rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          💼 Teacher Salary Entry
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

          {/* Manual Position Input */}
          <div className="form-control">
            <label className="label font-semibold">Position</label>
            <input
              type="text"
              placeholder="Teacher"
              className="input input-bordered w-full bg-white" readOnly
            />
          </div>

          {/* Salary Input (editable only if not Staff) */}
          <div className="form-control">
            <label className="label font-semibold">Salary Amount (৳)</label>
            <input
              type="number"
              className='input input-bordered w-full'
              placeholder="Enter salary amount"  min="0"
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
