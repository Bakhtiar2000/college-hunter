import React, { useEffect, useState } from 'react';
import { BsCheckAll } from 'react-icons/bs';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Colleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('https://college-hunter-server-one.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <div>
            <img className='w-full' src="assets/college-banner.png" alt="" />
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto'>All Colleges</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10'>
                {
                    colleges.map(college => <div key={college._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={college.college_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.college_name}</h2>
                            <p><span className='font-semibold'>Admission Date:</span>{college.admission_date}</p>

                            <p><span className='font-semibold'>No of Research:</span>{college.no_of_research}</p>
                            <Rating style={{ maxWidth: 100 }} value={Math.round(college.rating || 0)} readOnly />
                            <div className="card-actions justify-end">
                            <Link to={`/colleges/${college._id}`}><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Colleges;