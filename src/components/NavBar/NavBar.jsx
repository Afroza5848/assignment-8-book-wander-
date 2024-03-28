import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 my-3 items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm text-xl dropdown-content mt-3 z-[1] work p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>Home</a></NavLink>

                        <NavLink to="/listedBooks" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>Listed Books</a></NavLink>

                        <NavLink to="/pagesToRead" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>Pages To Read</a></NavLink>
                        <NavLink to="/faqs" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>FAQS</a></NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>Contact Us</a></NavLink>
                        <div className="lg:hidden flex flex-col items-center justify-center space-y-3 mt-4">
                            <a className="btn w-full bg-green-500 text-white text-xl work">Sign In</a>
                            <a className="btn w-full work text-white text-xl bg-blue-400">Sign up</a>
                        </div>
                    </ul>

                </div>
                <a className="btn btn-ghost work text-3xl">Book Wander</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu work menu-horizontal px-1 text-xl ">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                            : isPending
                                ? "font-semibold"
                                : " border-2 border-white px-5 py-2 rounded-lg"
                    }><a>Home</a></NavLink>

                    <NavLink to="/listedBooks" className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                            : isPending
                                ? "font-semibold"
                                : " border-2 border-white px-5 py-2 rounded-lg"
                    }><a>Listed Books</a></NavLink>

                    <NavLink to="/pagesToRead" className={({ isActive, isPending }) =>
                        isActive
                            ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                            : isPending
                                ? "font-semibold"
                                : " border-2 border-white px-5 py-2 rounded-lg"
                    }><a>Pages To Read</a></NavLink>
                    <NavLink to="/faqs" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>FAQS</a></NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive
                                ? "text-green-400 border border-green-400 px-5 py-2 rounded-lg font-semibold"
                                : isPending
                                    ? "font-semibold"
                                    : " border-2 border-white px-5 py-2 rounded-lg"
                        }><a>Contact Us</a></NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-4 hidden lg:flex">
                <a className="btn bg-green-500 text-white text-xl work">Sign In</a>
                <a className="btn work text-white text-xl bg-blue-400">Sign up</a>
            </div>
        </div>

    );
};

export default NavBar;