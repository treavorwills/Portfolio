import { React, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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
          <NavLink
            to="/Portfolio"
          >
            <GrHomeRounded className="nav-link" size="1.5em" />
          </NavLink>
        )}
        <NavLink className={({ isActive }) =>
            isActive ? 'active-nav-link nav-link' : 'nav-link'
          } to="/Portfolio/about">
          About
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'active-nav-link nav-link' : 'nav-link'
          }
          to="/Portfolio/projects"
        >
          Projects
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'active-nav-link nav-link' : 'nav-link'
          }
          to="/Portfolio/contact"
        >
          Contact
        </NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? 'active-nav-link nav-link' : 'nav-link'
          }
          to="/Portfolio/archive"
        >
          Archive
        </NavLink>
      </>
  );
}

export default NavBar;
