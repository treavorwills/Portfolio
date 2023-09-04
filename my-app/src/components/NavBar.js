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
            <GrHomeRounded size="1.5em" color="black" />
          </Link>
        )}
        <Link to="/Portfolio/about">
          About
        </Link>
        <Link
          to="/Portfolio/projects"
        >
          Projects
        </Link>
        <Link
          to="/Portfolio/contact"
        >
          Contact
        </Link>
        <Link
          to="/Portfolio/archive"
        >
          Archive
        </Link>
      </>
  );
}

export default NavBar;
