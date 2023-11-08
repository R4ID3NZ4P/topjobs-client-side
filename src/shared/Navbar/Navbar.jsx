import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const [loggedUser, setLoggedUser] = useState(null);

    const { user, logout, loading } = useContext(AuthContext);

    useEffect( () => {
        if(!loading) setLoggedUser(user);
    }, [user, loading])

    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all"}>All Jobs</NavLink></li>
        {
            user ? <>
                <li><NavLink to={"/applied"}>Applied Jobs</NavLink></li>
                <li><NavLink to={"/add"}>Add A Job</NavLink></li>
                <li><NavLink to={"/myjobs"}>My Jobs</NavLink></li></> :
                <></>
        }
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
    </>

    return (
        <div className="navbar border-b-2 px-5 lg:px-32 font-semibold text-gray-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className="normal-case text-2xl text-primary font-bold">TopJobs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {!user ?
                        <Link to={"/login"} className="btn btn-md btn-primary text-white normal-case rounded-none px-8">Login</Link> :
                        <>
                            <div className="tooltip tooltip-bottom" data-tip={`User Name: ${loggedUser?.displayName}`}>
                                <img src={loggedUser?.photoURL} alt="" className="w-12 rounded-full mr-2" />
                            </div>
                            
                            <a onClick={logout} className="btn btn-md btn-primary text-white normal-case rounded-none px-8">Logout</a>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;
