import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDoctor = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://frozen-tor-71174.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // const { data, isLoading, refetch } = useQuery('services', fetch('https://frozen-tor-71174.herokuapp.com/services').then(res => res.json()));

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = '6f08748cdf9f46113d74337c593a8f1e';


    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    const onSubmit = async data => {
        console.log(data);
        // pc r folder er img imgbb te post
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    fetch('https://frozen-tor-71174.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('successfully added doctor')
                                reset();
                            }
                        });
                }
            })

    };
    return (
        <div>
            <h2 className='text-2xl text-purple-600 font-bold'>Add a new Doctor!!!!</h2>
            <div className='mt-5'>
                <form onSubmit={handleSubmit(onSubmit)} className=' grid grid-cols-1 gap-3 justify-items-center'>

                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />

                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>

                    </div>
                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid pattern'
                                }
                            })} />

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register("specialty")} className="input input-bordered input-accent w-full max-w-xs">
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs text-center">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'image is required'
                                }
                            })} />

                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                        </label>

                    </div>

                    <input className='btn  text-white uppercase font-bold  w-full max-w-xs' value='Add' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;