import React from 'react'

export default function ContactPage() {
  return (
    <div>


      <div className="hero  my-10 ">
       
          
          <div className="card bg-slate-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered text-black bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input input-bordered text-black bg-white" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Write your message here"
                  className="input input-bordered input-lg w-full text-black bg-white" />

              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
  )
}
