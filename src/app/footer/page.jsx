import React from 'react';

const page = () => {
  return (
 <div>
   <footer className="footer p-10 bg-blue-500 text-white">
  <div>
    <span className="footer-title text-white">School</span> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Head Teacher's Message</a> 
    <a className="link link-hover">Our Mission</a> 
    <a className="link link-hover">Campus Life</a>
  </div> 
  <div>
    <span className="footer-title text-white">Admissions</span> 
    <a className="link link-hover">How to Apply</a> 
    <a className="link link-hover">Admission Form</a> 
    <a className="link link-hover">Fee Structure</a> 
    <a className="link link-hover">Class Routine</a>
  </div> 
  <div>
    <span className="footer-title text-white">Academics</span> 
    <a className="link link-hover">Subjects</a> 
    <a className="link link-hover">Faculty</a> 
    <a className="link link-hover">Exams</a> 
    <a className="link link-hover">Results</a>
  </div>
  <div>
    <span className="footer-title text-white">Contact</span> 
    <p>ABC High School</p>
    <p>123 Main Street, Dhaka</p>
    <p>Email: info@abcschool.edu.bd</p>
    <p>Phone: +880 1234-567890</p>
  </div>

  {/* Latest News Ticker */}

</footer>

<aside className='text-center bg-blue-800 text-white'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>


 </div>



  );
};

export default page;