"use client"
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
// api thikh e 
// import { getServices } from '../../../public/services.json'
const Student = () => {
    // load dataset
    // const {services} = await getServices()
    // const data = await getServices()
    // console.log(data.services)
// border-b-2 pb-5  p-5

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-black  '>
           <h1 className='p-5'>
           
                 <h2><button className="btn btn-secondary text-white">Add Student</button></h2>
     
            
            </h1> 


 
            <div className='text-black min-h-screen mb-10 bg-slate-100'>
                

                <div className=' mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    
                    {
                        services?.length > 0 && services?.map((service) => (
                            <ServiceCard service={service} key={service.id} />
                        ))
                    }


                </div>


            </div>
        </div>
    );
};

export default Student;