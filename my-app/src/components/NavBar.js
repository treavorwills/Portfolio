import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";

function NavBar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === "/Portfolio");
  }, [location.pathname]);

  return (
    <>
        {!isHome && (
          <Link
            to="/Portfolio"
          >
            <GrHomeRounded className="nav-link" size="1.5em" />
          </Link>
        )}
        <Link className="nav-link" to="/Portfolio/about">
          About
        </Link>
        <Link className="nav-link"
          to="/Portfolio/projects"
        >
          Projects
        </Link>
        <Link className="nav-link"
          to="/Portfolio/contact"
        >
          Contact
        </Link>
        <Link className="nav-link"
          to="/Portfolio/archive"
        >
          Archive
        </Link>
      </>
  );
}

export default NavBar;
