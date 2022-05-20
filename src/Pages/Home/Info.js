import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-5 px-12'>
            <InfoCard para='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-primary to-secondary' img={clock}></InfoCard>

            <InfoCard para='Brooklyn, NY 10036, United States' cardTitle='Visit our location' bgClass='bg-neutral' img={marker}></InfoCard>

            <InfoCard para='+000 123 456789' cardTitle='Contact us now' bgClass='bg-gradient-to-r from-primary to-secondary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;