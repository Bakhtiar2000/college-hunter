import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
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
                form.reset()
            })
            .catch(err => {
                if (err.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('Wrong Password given')
                }
            })
    }

    const handleLogInWithGoogle =()=>{
        googleSignIn()
            .then(res => {
                const loggedUser = res.user
                console.log(loggedUser)
                setError('')
                // navigate(from, { replace: true })
                form.reset()
            })
            .catch(err => setError(err.message))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
                            <form onSubmit={handleLogin}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email*</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Type your email here" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password*</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Type your password here" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {error !== '' && <p className='text-red-500 text-xs mt-3 text-center'>{error}</p>}

                                <input className="btn btn-primary btn-block mt-5" type="submit" value="Login" />
                            </form>

                            <div className="divider">OR</div>
                        <button onClick={handleLogInWithGoogle} className="btn btn-outline btn-primary">
                            <span className='mr-2 text-xl'><FcGoogle /> </span> Continue with google
                        </button>
                        <p className='text-center mt-3'>Don't have an account? <Link to='/register'><span className='text-primary'>Register</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;