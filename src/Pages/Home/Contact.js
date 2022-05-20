import React from 'react';
import appoinment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (

        <section style={{
            background: `url(${appoinment})`
        }} className='py-20 my-32'>
            <div className='text-center lg:w-1/2 mx-auto'>
                <h5 className='text-primary'>Contact us</h5>
                <h3 className='text-3xl mb-5 text-white'>Stay connected with us</h3>
                <form>
                    <input type="text" placeholder="Email address" className="input input-bordered my-3 w-1/2" />

                    <br />

                    <input type="text" placeholder="Subject" className="input input-bordered my-3 w-1/2" />

                    <br />

                    <textarea
                        className='textarea my-3 w-1/2'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>

                    <div className='mt-8'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;