import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const {user, logOut}= useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className='mb-10'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Colleges</a></li>
                            <li><a>Admissions</a></li>
                            <li><a>My Colleges</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">College Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Colleges</a></li>
                        <li><a>Admissions</a></li>
                        <li><a>My Colleges</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                {
                        user ?
                            <>
                                <div >
                                    <Link to='/profile'><p>{user?.displayName}</p></Link>
                                </div>
                                <button className="ml-3 btn bg-violet-500 hover:bg-violet-700 border-0 text-white" onClick={handleLogOut}>Log out</button>
                            </> :
                            <Link to='/login'><button className="btn bg-violet-500 hover:bg-violet-700 border-0 text-white">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;