import Link from 'next/link';
import React from 'react';

const AddStudentForm = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 text-black shadow-2xl rounded-2xl mt-10 mb-32 bg-purple-50">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">🎓 Add New Student</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Student Info */}
        <div className="form-control">
          <label className="label">Student Name</label>
          <input type="text" placeholder="Full Name" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Date of Birth</label>
          <input type="date" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Class</label>
          <select className="select select-bordered bg-white">
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
          <label className="label">Blood Group</label>
          <select className="select select-bordered bg-white">
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

        {/* Parent Info */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-purple-600 mt-4 mb-2 ">👨‍👩‍👧 Parent Information</h3>
        </div>

        <div className="form-control">
          <label className="label">Father&apos;s Name</label>
          <input type="text" placeholder="Father's Full Name" className="input  bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Mother&apos;s Name</label>
          <input type="text" placeholder="Mother's Full Name" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Father&apos;s Phone</label>
          <input type="tel" placeholder="e.g. 01XXXXXXXXX" className="input bg-white input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">Mother&apos;s Phone</label>
          <input type="tel" placeholder="e.g. 01XXXXXXXXX" className="input bg-white input-bordered" />
        </div>

        <div className="form-control md:col-span-2">
          <label className="label">Parent NID Card Number</label>
          <input type="text" placeholder="Enter Father's or Mother's NID" className="input bg-white input-bordered" />
        </div>

        {/* Address Section */}
        <div className="form-control md:col-span-2">
          <label className="label">Present Address</label>
          <textarea className="textarea  bg-white textarea-bordered" placeholder="Current address of student"></textarea>
        </div>

        <div className="form-control md:col-span-2">
          <label className="label">Permanent Address</label>
          <textarea className="textarea  bg-white textarea-bordered" placeholder="Permanent address of student"></textarea>
        </div>

        {/* Photo Upload */}
        <div className="form-control md:col-span-2">
          <label className="label">Student Photo</label>
          <input type="file" className="file-input file-input-bordered  bg-white w-full" />
        </div>

        {/* Submit Button */}
        <div className="form-control md:col-span-2 mt-4">
          <button className="btn btn-primary w-full">Add Student</button>
          <Link href="/dashboard"><button className="btn btn-ghost w-full mt-5">Go Back</button></Link>

        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
