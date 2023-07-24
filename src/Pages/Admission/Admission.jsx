import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    return (
        <div>
            <img className='w-full' src="/assets/admission-banner.png" alt="" />
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto'>Admission</h2>

            <div className="overflow-x-auto max-w-7xl mx-auto mb-10">
                <table className="table">
                    
                    <tbody>
                        {
                            colleges.map((college, index) => <tr key={college._id}>
                                <td>{index+1}</td>
                                <td>{college.college_name}</td>
                                <td className='btn btn-sm btn-outline btn-primary'><Link to={`/admissionForm/${college._id}`}>Get admitted</Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;