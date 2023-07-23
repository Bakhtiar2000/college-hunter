import React from 'react';
import './Banner.css'
import bg from '/assets/hol4.jpg'
import person from '/assets/wepik-export-20230723071635yc6u.png'
const Banner = () => {
    return (
        <div className=''>
            <img className='relative' src={bg} alt="" />
            <div className='absolute top-60 flex justify-between mx-auto max-w-7xl'>
                {/* <img className='w-1/3' src={person} alt="" /> */}
            </div>
        </div>
    );
};

export default Banner;