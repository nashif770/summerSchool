import React from 'react';

const Headings = ({heading, subHeading}) => {
    return (
        <div className="grid h-20 card bg-base-300 rounded-none m-3 place-items-center">
            <h1 className='text-3xl text-center'>{heading}</h1>
            <p className='text-1xl text center'>{subHeading}</p>
        </div>
    );
};

export default Headings;