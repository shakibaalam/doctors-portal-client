import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const Available = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://frozen-tor-71174.herokuapp.com/available?date=${formattedDate}`).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://frozen-tor-71174.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate])
    return (
        <div>
            <h5 className='text-center text-xl text-secondary my-16'>Available appoinments on {format(date, 'PP')}.</h5>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:px-20 pb-20'>
                {
                    services?.map(service => <Service key={service._id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal
                key={treatment._id}
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}>
            </BookingModal>}
        </div>
    );
};

export default Available;