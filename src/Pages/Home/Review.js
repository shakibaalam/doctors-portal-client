import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center my-10'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h3 className='text-xl'>{review.name}</h3>
                        <p>{review.region}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;