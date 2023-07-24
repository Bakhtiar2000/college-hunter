import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const { user }= useContext(AuthContext)
    const [profile, setProfile] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    console.log(profile)
    const { _id, name, email, address, photo, university } = profile
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const name = form.name.value;
        const university = form.university.value;
        const address = form.address.value;

        const updatedProfile = { email, name, university, address}
        console.log(updatedProfile)
        
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Details updated successfully',
                        'success'
                      )
                }
            })

    }
    return (
        <div className='mb-10 '>
             <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit}>

                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type updated email" className="input input-bordered" />
                        </div>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type updated name" className="input input-bordered" />
                        </div>

                        {/* University */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">University</span>
                            </label>
                            <input type="text" name="university" placeholder="Type updated university" className="input input-bordered" />
                        </div>

                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="address" placeholder="Type updated address" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-5">
                            <input className="btn btn-primary btn-block" type="submit" value="Save" />

                        </div>
                    </form>
                </div>
            </div>
            <h2 className='text-3xl md:text-5xl text-center  pt-28 mb-8 font-serif w-fit mx-auto'>My Profile</h2>
            <div className='max-w-7xl mx-auto mb-6 pl-5'>
                <p><span className='font-semibold'>Name: </span>{name}</p>
                <p><span className='font-semibold'>Email: </span> {email}</p>
                <p><span className='font-semibold'>Photo: </span> {photo}</p>
                <p><span className='font-semibold'>Address: </span> {address}</p>
                <p><span className='font-semibold'>University: </span> {university}</p>
            </div>
            <div className='max-w-7xl mx-auto pl-5'>
            <label htmlFor="my-modal-4" className="btn btn-primary">Update Profile</label>
            </div>
            {/* <button className="btn btn-primary ml-5" onClick={() => window.my_modal_2.showModal()}>Update profile</button> */}
        </div>
    );
};

export default Profile;