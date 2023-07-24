import React from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

const SingleCollege = () => {
    const college = useLoaderData()
    const { college_name, college_image, admission_date, admission_process, events, research, college_sports } = college
    return (
        <div className='mb-10'>
            <img className='w-full' src="/assets/college-banner.png" alt="" />
            <h2 className='text-3xl md:text-5xl text-center mt-20 mb-8 font-serif w-fit mx-auto'>{college_name}</h2>
            <div className='flex justify-between items-center gap-6 max-w-7xl mx-auto mb-5'>
                <img className='w-96' src={college_image} alt="" />
                <div className=''>
                    <p><span className='font-semibold'>Admission Date: </span>{admission_date}</p>
                    <p><span className='font-semibold max-w-60'>Admission Process: </span>{admission_process}</p>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6 max-w-7xl mx-auto'>
                <div className='bg-blue-100 rounded-lg py-4 px-6'>
                    <h2 className='text-2xl font-semibold mb-4'>Events:</h2>
                    {
                        events.map(singleEvent=> <div key={singleEvent.name}>
                            <p className='flex items-center gap-1 font-semibold'><BsCheckAll className="text-green-500"/>{singleEvent.name}</p>
                            <p>{singleEvent.details}</p>
                        </div>)
                    }
                </div>

                <div className='bg-blue-100 rounded-lg py-4 px-6'>
                    <h2 className='text-2xl font-semibold mb-4'>Research Works:</h2>
                    {
                        research.map(singleEvent=> <div key={singleEvent.name}>
                            <p className='flex items-center gap-1 font-semibold'><BsCheckAll className="text-green-500"/>{singleEvent.name}</p>
                            <p>{singleEvent.details}</p>
                        </div>)
                    }
                </div>

                <div className='bg-blue-100 rounded-lg py-4 px-6'>
                    <h2 className='text-2xl font-semibold mb-4'>Sports:</h2>
                    {
                        college_sports.map(singleEvent=> <div key={singleEvent.name}>
                            <p className='flex items-center gap-1 font-semibold'><BsCheckAll className="text-green-500"/>{singleEvent.name}</p>
                            <p>{singleEvent.details}</p>
                        </div>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default SingleCollege;