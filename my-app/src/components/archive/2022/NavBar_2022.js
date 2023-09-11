import React from 'react';
import { Link } from "react-router-dom";
import { GrHomeRounded, GrMenu } from "react-icons/gr";


function NavBar() {
    const [navBarOpen, setNavBarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-200 mb-1">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <Link to="/Portfolio" className="font-bold leading-relaxed inline-block mr-4 py-2">
                        <GrHomeRounded size="1.5em" color="black" />
                    </Link>
                    <button className="cursor-pointer text-xl px-3 py-1 leading-none border-transparent rounded md:hidden outline-none focus:outline-none" type="button" onClick={() => setNavBarOpen(!navBarOpen)}><GrMenu size="1.5em" /></button>
                </div>
                <div className={"md:flex items-center" + (navBarOpen ? "flex ml-auto" : " hidden")}>
                    <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                        <li className="nav-item flex justify-end"><Link className="px-3 py-2 hover:opacity-75" to="/Portfolio/about">About</Link></li>
                        <li className="nav-item flex justify-end"><Link className="px-3 py-2 flex items-center hover:opacity-75" to="/Portfolio/projects">Projects</Link></li>
                        <li className="nav-item flex justify-end"><Link className="px-3 py-2 flex items-center hover:opacity-75" to="/Portfolio/contact">Contact</Link></li>
                        <li className="nav-item flex justify-end"><Link className="px-3 py-2 flex items-center hover:opacity-75" to="/Portfolio/resume">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;