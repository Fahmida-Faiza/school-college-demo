import Link from 'next/link';
import React from 'react';

const AddStaffForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-32 ">
      <div className="card shadow-xl text-black bg-orange-50">
        <div className="card-body p-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6"> Add Staff</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

            <div className="form-control">
              <label className="label">Full Name</label>
              <input type="text" placeholder="Enter full name" className="input bg-white input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">Date of Birth</label>
              <input type="date" className="input bg-white input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">Father&apos;s Name</label>
              <input type="text" placeholder="Enter father's name" className="input  bg-white input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">Mother&apos;s Name</label>
              <input type="text" placeholder="Enter mother's name" className="input bg-white input-bordered" />
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">Educational Qualification</label>
              <input type="text" placeholder="e.g. B.A, M.Com, Diploma" className="input bg-white input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">Phone Number</label>
              <input type="tel" placeholder="01XXXXXXXXX" className="input bg-white input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">Blood Group</label>
              <select className="select select-bordered  bg-white">
                <option disabled defaultValue="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">Present Address</label>
              <textarea className="textarea textarea-bordered bg-white" placeholder="Current address"></textarea>
            </div>

            <div className="form-control md:col-span-2">
              <label className="label">Permanent Address</label>
              <textarea className="textarea textarea-bordered bg-white" placeholder="Permanent address"></textarea>
            </div>

            <div className="form-control">
              <label className="label">NID Card Number</label>
              <input type="text" placeholder="NID Number" className="input input-bordered bg-white" />
            </div>

            <div className="form-control">
              <label className="label">Upload Photo</label>
              <input type="file" className="file-input file-input-bordered w-full bg-white" />
            </div>

            <div className="form-control md:col-span-2 mt-4">
              <button className="btn btn-primary w-full">Add Staff</button>
              <Link href="/dashboard"><button className="btn btn-ghost w-full mt-5">Go Back</button></Link>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaffForm;
