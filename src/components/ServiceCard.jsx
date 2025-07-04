import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, image, price, _id } = service
    return (
        <div className='mx-auto'>
            <div className="card text-black lg:w-96 md:w-80 shadow-xl">
                <figure className="px-10 pt-10">
                    <Image src={image} height={120} width={430}  alt={name} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>price: ${price}</p>
                    <div className="card-actions">
                        <Link href={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;