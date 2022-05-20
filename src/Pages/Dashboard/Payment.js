import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1WpKFIH4cz62rlYdrqvvkHLUMvzD4E4liy02Y9ksbprp6Hb0cxmbbDDP0pAarbYo8AEpo4T0gi6XInArYISIcM003UHl2AcT');

const Payment = () => {
    const { id } = useParams();
    const url = `https://frozen-tor-71174.herokuapp.com/booking/${id}`;
    const { data: appoinment, isLoading, refetch } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='my-5 text-success text-xl'>Please Pay for : {id}</h2>
            <div className='lg:w-1/2 mx-auto'>
                <div className="card  bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <p>Hello, <span className='text-success font-bold'>{appoinment.patientName}</span></p>
                        <h2 className="card-title">Pay for : {appoinment.treatment}</h2>
                        <p>We will see you on <span className='text-red-500'>{appoinment.date}</span>  at {appoinment.slot}</p>
                        <p>Please pay : $ <span className='text-red-500 font-bold text-xl'>{appoinment.price}</span></p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appoinment={appoinment} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;