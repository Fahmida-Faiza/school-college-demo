import React from 'react';

const StudentFeeForm = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 mb-32 ">
      <div className="card bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl p-8 rounded-3xl border text-black">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8 flex items-center justify-center gap-2">
          💰 Student Fee Entry
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6  ">

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Student Name</span>
            </label>
            <input type="text" placeholder="Enter student name" className="input bg-white input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Class</span>
            </label>
            <select className="select select-bordered bg-white ">
              <option disabled defaultValue="">Select Class</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              <option>Class 9</option>
              <option>Class 10</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Roll</span>
            </label>
            <input type="text" placeholder="Roll number" className="input bg-white  input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Section</span>
            </label>
            <input type="text" placeholder="e.g. A, B, C" className="input bg-white  input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Date</span>
            </label>
            <input type="date" className="input bg-white   input-bordered" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Amount (৳)</span>
            </label>
            <input type="number" placeholder="e.g. 500" className="input bg-white  input-bordered" />
          </div>

          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">Exam Fee (Optional)</span>
            </label>
            <input type="number" placeholder="e.g. 200" className="input bg-white  input-bordered" />
          </div>

          <div className="form-control md:col-span-2 mt-4">
            <button className="btn btn-primary w-full text-lg">Submit Fee</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentFeeForm;
