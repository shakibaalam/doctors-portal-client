import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl " />
                    <div className='lg:mr-28'>
                        <h1 className="text-5xl font-bold">Your new smiles here!</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem adipisci optio harum repellat et dignissimos! Voluptate, ullam aspernatur assumenda dolorum perspiciatis illo, at quidem accusamus unde expedita vel qui!</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;