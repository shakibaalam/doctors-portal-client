import React from 'react';
import quote from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winsons Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole1,
            region: 'California'
        },
        {
            _id: 2,
            name: 'Winsons Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole2,
            region: 'California'
        },
        {
            _id: 3,
            name: 'Winsons Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pepole3,
            region: 'California'
        }
    ]
    return (
        <section className='lg:px-12 px-3'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-xl font-bold'>Testimonial</h3>
                    <h3 className='text-3xl'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;