import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { FaGithub } from 'react-icons/fa';

const Register = () => {
    const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const photo = form.photo.value;
        const university = form.university.value;
        const address = form.address.value;
        const email = form.email.value;
        const password = form.password.value;
        const savedUser = { name, photo, university, address, email }
        setError('')
        if (password.length < 6) {
            setError('Password must be six characters long')
            return
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then((result) => {
                        // const user = result.user
                        console.log(savedUser)
                        fetch('https://college-hunter-server-one.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    navigate('/')
                                    Swal.fire({
                                        title: 'Account created successfully',
                                        showClass: {
                                            popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOutUp'
                                        }
                                    })
                                }
                            })

                    })
                    .catch(err => console.log(err.message))
            })

            .catch(err => console.log(err))
    }

    const handleLogInWithGithub = () => {
        githubSignIn()
        .then(res => {
            const loggedUser = res.user
            console.log(loggedUser)
            const savedUser = { name: loggedUser?.displayName, photo: loggedUser?.photoURL, university: "", address: "", email: loggedUser?.email }
            fetch('https://college-hunter-server-one.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        navigate('/')
                        Swal.fire({
                            title: 'Account created successfully',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    }
                })
        })
            .catch(err => console.log(err.message))
    }

    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                const savedUser = { name: loggedUser?.displayName, photo: loggedUser?.photoURL, university: "", address: "", email: loggedUser?.email }
                fetch('https://college-hunter-server-one.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate('/')
                            Swal.fire({
                                title: 'Account created successfully',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            })
                        }
                    })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Create a new account</h2>
                        <form onSubmit={handleRegister}>

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
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Type your photo url here" className="input input-bordered" />
                            </div>

                            {/* University */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input type="text" name='university' placeholder="Type your university name here" className="input input-bordered" />
                            </div>

                            {/* Address */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" name='address' placeholder="Type your address here" className="input input-bordered" />
                            </div>

                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" name='email' placeholder="Type your email here" className="input input-bordered" />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" name='password' placeholder="Type your password here" className="input input-bordered" />
                            </div>

                            {error !== '' && <p className='text-red-500 text-xs mt-3'>{error}</p>}

                            <input className="btn btn-primary btn-block mt-5" type="submit" value="Sign up" />
                        </form>

                        <div className="divider">OR</div>
                        <button onClick={handleLogInWithGoogle} className="btn btn-outline btn-primary">
                            <span className='mr-2 text-xl'><FcGoogle /> </span> Continue with google
                        </button>
                        <button onClick={handleLogInWithGithub} className="btn btn-outline btn-primary">
                            <span className='mr-2 text-xl'><FaGithub /> </span> Continue with github
                        </button>
                        <p className='text-center mt-3'>Already have an account? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;