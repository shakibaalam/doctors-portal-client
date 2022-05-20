import React from 'react';

const InfoCard = ({ img, cardTitle, para, bgClass }) => {
    return (
        <div className={`card lg:card-side ${bgClass} shadow-xl px-6 text-white`} >
            <figure className='pt-6'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{para}</p>
            </div>
        </div>
    );
};

export default InfoCard;