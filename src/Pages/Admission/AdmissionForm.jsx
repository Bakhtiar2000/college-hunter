import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const AdmissionForm = () => {
    const {user}= useContext(AuthContext)
    const params = useParams()
    console.log(params);
    const [colleges, setColleges] = useState([])

    useEffect(() => {
        fetch(`https://college-hunter-server-one.vercel.app/colleges/${params.id}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    console.log(colleges)

    const handleAdmission = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const dob = form.dob.value;
        const address = form.address.value;
        const admittedUser = { name, photo, subject, email, phone, dob, address, ...colleges }
        console.log(admittedUser)

        fetch('https://college-hunter-server-one.vercel.app/myColleges', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admittedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Admission successful',
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
            <img className='w-full' src="/assets/admission-banner.png" alt="" />
            <h2 className='text-3xl md:text-5xl text-center  mt-20 mb-8 font-serif w-fit mx-auto'>Get Admitted</h2>

            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-blue-100 text-slate-900 mx-auto mb-10">
                <div className="card-body">
                    <form onSubmit={handleAdmission}>

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" name='name' placeholder="Type your name here" className="input input-bordered" />
                        </div>

                        {/* Photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL*</span>
                            </label>
                            <input type="text" name='photo' placeholder="Type your photo url here" className="input input-bordered" />
                        </div>

                        {/* Subject */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject*</span>
                            </label>
                            <select className='select select-bordered' name='subject'>
                                <option value="cse">CSE</option>
                                <option value="eee">EEE</option>
                                <option value="ce">CE</option>
                                <option value="me">ME</option>
                                <option value="gre">GRE</option>
                                <option value="mat">Mathematics</option>
                                <option value="phy">Physics</option>
                                <option value="che">Chemistry</option>
                                <option value="eng">English</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" readOnly/>
                        </div>

                        {/* Phone */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number*</span>
                            </label>
                            <input type="number" name='phone' placeholder="Type your phone number here" className="input input-bordered" />
                        </div>

                        {/* Date of Birth */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date of Birth*</span>
                            </label>
                            <input type="date" name='dob' placeholder="Type your date of birth here" className="input input-bordered" />
                        </div>

                        {/* Address */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address*</span>
                            </label>
                            <input type="text" name='address' placeholder="Type your address here" className="input input-bordered" />
                        </div>

                        {/* Submit */}
                        <input className="btn btn-primary btn-block mt-5" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;