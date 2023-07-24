import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className='py-3 bg-blue-100 fixed w-full drop-shadow-lg z-30 bg-opacity-50'>
            <div className="flex justify-between">
                <div className='flex'>
                    <div className="">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/colleges'>Colleges</Link></li>
                                <li><Link to='/admissions'>Admissions</Link></li>
                                <li><Link to='/myColleges'>My Colleges</Link></li>
                                <div className='btn btn-ghost w-32 hidden lg:block'>
                                    <Link to={`/profile/${user?.email}`}><p>{user?.displayName}</p></Link>
                                </div>
                            </ul>

                        </div>
                        <a className="btn btn-ghost normal-case text-xl">College Hunter</a>
                    </div>
                    <div className="ml-5 hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/colleges'>Colleges</Link></li>
                            <li><Link to='/admissions'>Admissions</Link></li>
                            <li><Link to='/myColleges'>My Colleges</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center mr-3">
                    <select className='select select-bordered' name='subject'>
                        <option value=""></option>
                        <option value="Harvard">Harvard</option>
                        <option value="Caltech">Caltech</option>
                        <option value="MIT">MIT</option>
                        <option value="Yale">Yale</option>
                        <option value="Stanford">Stanford</option>
                    </select>
                    {
                        user ?
                            <>
                                <div className='btn btn-ghost w-32 hidden lg:block'>
                                    <Link to={`/profile/${user?.email}`}><p>{user?.displayName}</p></Link>
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