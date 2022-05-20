import React from 'react';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { img, name, email, specialty } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded-full">
                    <img src={img} alt='avatar' />
                </div>
            </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm" className="btn btn-xs text-white btn-error modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;