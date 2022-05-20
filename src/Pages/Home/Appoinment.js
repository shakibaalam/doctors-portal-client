import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appoinment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'

const Appoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center text-white my-28 lg:px-36 lg:p-0 py-20 px-3'>

            <div className='flex-1 mt-[-150px] hidden lg:block'>
                <img width={'600px'} height={'600px'} src={doctor} alt="" />
            </div>

            <div className='flex-1 '>
                <h4 className='text-primary'>Appoinment</h4>
                <h2 className='text-3xl uppercase font-semibold my-4'>Make an appointment Today</h2>
                <p className='mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pag</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default Appoinment;