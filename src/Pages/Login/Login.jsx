import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn, passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const emailRef = useRef()
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('')

        signIn(email, password)
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                setError('')
                navigate('/')
                Swal.fire({
                    title: 'Account log in successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(err => {
                console.log(err.message)
                if (err.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Password given')
                }
            })
    }

    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provide the email address to reset password')
            return
        }

        passwordReset(email)
            .then(res => {
                Swal.fire(
                    'Check your email',
                    'Password reset request sent',
                    'success'
                )
            })
            .catch(err => console.log(err.message))
    }

    const handleLogInWithGoogle = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                const savedUser = { name: loggedUser?.displayName, photo: loggedUser?.photoURL, university: "", address: "", email: loggedUser?.email }
                fetch('http://localhost:5000/users', {
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
                                title: 'Account log in successful',
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
            .catch(err => setError(err.message))
    }

    const handleLogInWithGithub = () => {
        githubSignIn()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                const savedUser = { name: loggedUser?.displayName, photo: loggedUser?.photoURL, university: "", address: "", email: loggedUser?.email }
                fetch('http://localhost:5000/users', {
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
                                title: 'Account log in successful',
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
                        <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email*</span>
                                </label>
                                <input type="email" ref={emailRef} name='email' placeholder="Type your email here" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password*</span>
                                </label>
                                <input type="password" name='password' placeholder="Type your password here" className="input input-bordered" />
                                <label className="label">
                                    <p onClick={handlePasswordReset} className="label-text-alt link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            {error !== '' && <p className='text-red-500 text-xs mt-3'>{error}</p>}

                            <input className="btn btn-primary btn-block mt-5" type="submit" value="Login" />
                        </form>

                        <div className="divider">OR</div>
                        <button onClick={handleLogInWithGoogle} className="btn btn-outline btn-primary">
                            <span className='mr-2 text-xl'><FcGoogle /> </span> Continue with google
                        </button>

                        <button onClick={handleLogInWithGithub} className="btn btn-outline btn-primary">
                            <span className='mr-2 text-xl'><FaGithub /> </span> Continue with github
                        </button>
                        <p className='text-center mt-3'>Don't have an account? <Link to='/register'><span className='text-primary'>Register</span></Link></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;