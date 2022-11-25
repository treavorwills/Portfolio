import React from 'react';
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div class="">
            <nav>
                <ul>
                    <li><Link to="/ReactPortfolio">Home</Link></li>
                    <li><Link to="/ReactPortfolio/about">About</Link></li>
                    <li><Link to="/ReactPortfolio/projects">Projects</Link></li>
                    <li><Link to="/ReactPortfolio/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;