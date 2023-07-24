import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const MyColleges = () => {
    const { user } = useContext(AuthContext)
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch(`https://college-hunter-server-one.vercel.app/myColleges?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    console.log(colleges)

    const handleReview= event=>{
        event.preventDefault()
        const form = event.target
        const rating = form.rating.value;
        const review = form.review.value;
        const newReview={name: user?.displayName, image:user?.photoURL, rating, comment: review }
        fetch('https://college-hunter-server-one.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Review updated',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })
    }
    return (
        <div>
            <img className='w-full' src="/assets/my-college-banner.webp" alt="" />
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto'>My Colleges</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto'>
                {
                    colleges.map(college => <div key={college._id} className="card w-96 bg-base-100 shadow-xl mx-auto mb-10 mt-6">
                        <figure><img src={college.college_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college.college_name}</h2>
                            <p><span className='font-semibold'>Subject: </span> {college.subject}</p>
                            <p><span className='font-semibold'>Student: </span> {college.name}</p>
                            <p><span className='font-semibold'>Phone: </span> {college.phone}</p>
                            <p><span className='font-semibold'>Date of birth: </span> {college.dob}</p>
                            <form onSubmit={handleReview}>
                            <div className='flex items-center gap-2 my-3'>
                                <span className='font-semibold'>Rating: </span><input type="number" placeholder='Rate the college out of 5' className='input input-bordered w-full' name='rating' />
                            </div>

                            <div className='flex items-center gap-2'>
                                <span className='font-semibold'>Review: </span><textarea placeholder='Review college' className='input input-bordered h-20 w-full' name='review' />
                            </div>

                            <input className='m-auto flex rounded bg-slate-200 hover:bg-slate-300 py-1 px-3 mt-3' type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>)
                }
            </div>
            <p></p>
        </div>
    );
};

export default MyColleges;