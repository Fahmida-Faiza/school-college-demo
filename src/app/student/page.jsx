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


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='text-black'>
            hi this is student details all


            <div className='text-black min-h-screen '>

                {/* <h2 className="card-title mx-auto ">our services</h2>
                        <p className='text-center'>If a dog chews shoes whose shoes does he choose?</p> */}

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