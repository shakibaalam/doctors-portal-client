import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white uppercase font-bold">{children}</button>
        </div>
    );
};

export default PrimaryButton;