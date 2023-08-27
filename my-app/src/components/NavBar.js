import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

function NavBar() {
    const location = useLocation();
    const [isHome, setIsHome] = useState(true);

    useEffect(() => {
        setIsHome(location.pathname === '/Portfolio');
    }, [location.pathname]);

  return (
    <nav className="relative flex items-center justify-between px-2 py-3 mb-1">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        {!isHome && <Link
          to="/Portfolio"
          className="font-bold leading-relaxed inline-block mr-4 py-2"
        >
          <GrHomeRounded size="1.5em" color="black" />
        </Link>}
        <Link className="py-2 hover:opacity-75" to="/Portfolio/about">
          About
        </Link>
        <Link
          className="py-2 flex items-center hover:opacity-75"
          to="/Portfolio/projects"
        >
          Projects
        </Link>
        <Link
          className="py-2 flex items-center hover:opacity-75"
          to="/Portfolio/contact"
        >
          Contact
        </Link>
        <Link
          className="py-2 flex items-center hover:opacity-75"
          to="/Portfolio/archive"
        >
          Archive
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
