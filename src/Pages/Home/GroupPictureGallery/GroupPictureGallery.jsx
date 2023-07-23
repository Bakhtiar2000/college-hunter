import React from 'react';
import pic4 from '../../../../public/assets/graduates/4.avif' 
import pic2 from '../../../../public/assets/graduates/2.avif' 
import pic3 from '../../../../public/assets/graduates/3.avif' 

const GroupPictureGallery = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-3xl font-semibold my-10'>Graduates</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                <img className='mx-auto' src={pic4} alt="" />
                <img className='mx-auto' src={pic2} alt="" />
                <img className='mx-auto' src={pic3} alt="" />
            </div>
        </div>
    );
};

export default GroupPictureGallery;