import React from 'react'

function Notice() {
  return (
    <div  className='max-w-7xl mx-auto my-8'>
        <div className="overflow-x-auto text-black ">
  <table className="table ">
    {/* head */}
    <thead className='text-black font-bold text-3xl bg-cyan-300'>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Publishing Date</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="">
        <th>1</th>
        <td>এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২</td>
        <td>	17 Jun,2025</td>
        <td><button  className='btn btn-primary text-white'>View</button></td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২</td>
        <td>17 Jun,2025</td>
        <td><button  className='btn btn-primary text-white'>View</button></td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td><button  className='btn btn-primary text-white'>View</button></td>
      </tr>

        <tr>
        <th>2</th>
        <td>এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২</td>
        <td>17 Jun,2025</td>
        <td><button  className='btn btn-primary text-white'>View</button></td>
      </tr>
        <tr>
        <th>2</th>
        <td>এইচএসসি পরীক্ষা-২০২৫ এর পরীক্ষার্থীদের নির্দেশনা-২</td>
        <td>17 Jun,2025</td>
        <td><button  className='btn btn-primary text-white'>View</button></td>
      </tr>
    </tbody>
  </table>
</div>

<div className='mt-10 my-10'>
    <div className="join">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
   />
  <input className="join-item btn btn-square " type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
</div>


    </div>
    
  )
}

export default Notice