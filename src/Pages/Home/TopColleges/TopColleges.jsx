import React, { useEffect, useState } from 'react';
import { BsCheckAll } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const TopColleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('https://college-hunter-server-one.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data.slice(0, 3)))
    }, [])

    return (
        <div className='max-w-7xl mx-auto md:mt-0 -mt-80'>
            <h2 className='text-3xl md:text-5xl text-center  pt-20 mb-8 font-serif w-fit mx-auto customer-review-heading'>Top colleges</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
                {
                    colleges.map(college => <div key={college._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={college.college_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.college_name}</h2>
                            <p><span className='font-semibold'>Admission Date:</span> {college.admission_date}</p>

                            <div>
                                <h2 className='font-semibold'>Events:</h2>
                                <ol>
                                    {
                                        college.events.map(singleEvent => <li className='flex items-center gap-1' key={singleEvent.name}> <BsCheckAll className="text-green-500" />{singleEvent.name}</li>)
                                    }
                                </ol>
                            </div>

                            <div>
                                <h2 className='font-semibold'>Research history:</h2>
                                <ul>
                                    {
                                        college.research.map(singleEvent => <li className='flex items-center gap-1' key={singleEvent.name}><BsCheckAll className="text-green-500" /> {singleEvent.name}</li>)
                                    }
                                </ul>
                            </div>

                            <div>
                                <h2 className='font-semibold'>Sports:</h2>
                                <ul>
                                    {
                                        college.college_sports.map(singleEvent => <li className='flex items-center gap-1' key={singleEvent.name}><BsCheckAll className="text-green-500" />{singleEvent.name}</li>)
                                    }
                                </ul>
                            </div>

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

export default TopColleges;