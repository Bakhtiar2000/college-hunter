import React from 'react';
import './Banner.css'
import bg from '/assets/banner.webp'
import person from '/assets/wepik-export-20230723071635yc6u.png'
const Banner = () => {
    return (
        <div className='relative'>
            <img className='hidden md:block w-full' src={bg} alt="" />
            <div className='pt-[420px] md:pt-0 md:absolute flex justify-start gap-5 transform md:top-[60%] lg:top-[50%] -translate-y-1/2  ml-12 lg:ml-20'>
                <div>
                <p className='md:w-80 lg:w-[500px] text-black md:text-white text-md lg:text-2xl'>Discover, Compare, and Book Your Dream College with College Hunter. Simplify your college search and secure your future in just a few clicks. Explore a wide range of esteemed institutions worldwide and find the perfect fit for your academic journey. Start your educational adventure today!</p>
                <button className='btn btn-primary mt-5'>Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;