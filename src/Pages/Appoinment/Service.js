import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body justify-center items-center">
                <h2 className="card-title text-secondary text-xl">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span> :
                            <span className=' text-red-600'>Try another date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}   available</p>
                <p className='font-bold text-red-600'>${price ? price : '100'}</p>
                <div className="card-actions justify-center mt-5">

                    <label disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn modal-button  btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase font-bold">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;