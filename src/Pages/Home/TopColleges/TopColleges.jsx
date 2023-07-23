import React, { useEffect, useState } from 'react';

const TopColleges = () => {
    const [colleges, setColleges] = useState([])

    useEffect(()=>{
        fetch('/colleges.json')
        .then(res => res.json())
        .then(data => setColleges(data.slice(0, 3)))
    },[])

    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-3xl font-semibold my-10'>Top colleges</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 '>
                {
                    colleges.map(college => <div key={college.college_name} className="card w-96 bg-base-100 shadow-xl mx-auto">
                        <figure><img src={college.college_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.college_name}</h2>
                            <p>Admission Date: {college.admission_date}</p>

                            <div>
                                <h2>Events:</h2>
                                <ol>
                                    {
                                        college.events.map(singleEvent=> <li key={singleEvent.name}>{singleEvent.name}</li>)
                                    }
                                </ol>
                            </div>

                            <div>
                                <h2>Research history:</h2>
                                <ul>
                                    {
                                        college.research.map(singleEvent=> <li key={singleEvent.name}>{singleEvent.name}</li>)
                                    }
                                </ul>
                            </div>

                            <div>
                                <h2>Sports:</h2>
                                <ul>
                                    {
                                        college.college_sports.map(singleEvent=> <li key={singleEvent.name}>{singleEvent.name}</li>)
                                    }
                                </ul>
                            </div>
                            
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopColleges;