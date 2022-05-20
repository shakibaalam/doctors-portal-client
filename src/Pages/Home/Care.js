import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Care = () => {
    return (
        <div className='lg:px-52 py-36'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={treatment} alt="Album" />
                </figure>
                <div className='flex justify-center items-center'>
                    <div className="card-body">
                        <h2 className="card-title text-3xl pb-2">Exceptional Dental Care, on Your Terms</h2>
                        <p className='pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;