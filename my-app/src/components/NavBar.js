import React from 'react';
import { Link } from "react-router-dom";
import { GrHomeRounded, GrMenu } from "react-icons/gr";


function NavBar() {
    const [navBarOpen, setNavBarOpen] = React.useState(false);
    return (
        <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-200 mb-1">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div class="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <Link to="/ReactPortfolio" class="font-bold leading-relaxed inline-block mr-4 py-2">
                        <GrHomeRounded size="1.5em" color="black" />
                    </Link>
                    <button class="cursor-pointer text-xl px-3 py-1 leading-none border-transparent rounded md:hidden outline-none focus:outline-none" type="button" onClick={() => setNavBarOpen(!navBarOpen)}><GrMenu size="1.5em" /></button>
                </div>
                <div class={"md:flex items-center" + (navBarOpen ? "flex ml-auto" : " hidden")}>
                    <ul class="flex flex-col md:flex-row list-none md:ml-auto">
                        <li class="nav-item flex justify-end"><Link class="px-3 py-2 hover:opacity-75" to="/ReactPortfolio/about">About</Link></li>
                        <li class="nav-item flex justify-end"><Link class="px-3 py-2 flex items-center hover:opacity-75" to="/ReactPortfolio/projects">Projects</Link></li>
                        <li class="nav-item flex justify-end"><Link class="px-3 py-2 flex items-center hover:opacity-75" to="/ReactPortfolio/contact">Contact</Link></li>
                        <li class="nav-item flex justify-end"><Link class="px-3 py-2 flex items-center hover:opacity-75" to="/ReactPortfolio/resume">Resume</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;