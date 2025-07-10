import React from 'react';

const AddTeacherForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-xl mt-10 bg-teal-50 mb-32">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700"> 👨‍🏫 Add Teacher</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
        <div className="form-control">
          <label className="label">Name</label>
          <input type="text" placeholder="Full Name" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Father's Name</label>
          <input type="text" placeholder="Father's Name" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Mother's Name</label>
          <input type="text" placeholder="Mother's Name" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label ">Date of Birth</label>
          <input type="date" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Educational Qualification</label>
          <input type="text" placeholder="e.g. B.Sc, M.A" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Email</label>
          <input type="email" placeholder="Email Address" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Phone Number</label>
          <input type="tel" placeholder="Phone Number" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Blood Group</label>
          <select className="select bg-white select-bordered">
            <option disabled defaultValue="">Select</option>
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
          <textarea className="textarea bg-white textarea-bordered" placeholder="Current Address"></textarea>
        </div>

        <div className="form-control md:col-span-2">
          <label className="label">Permanent Address</label>
          <textarea className="textarea bg-white textarea-bordered" placeholder="Permanent Address"></textarea>
        </div>

        <div className="form-control">
          <label className="label">NID Card Number</label>
          <input type="text" placeholder="NID Number" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Photo</label>
          <input type="file" className="file-input bg-white file-input-bordered w-full" />
        </div>

        <div className="form-control md:col-span-2 mt-4">
          <button className="btn btn-info w-full">Add Teacher</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacherForm;
