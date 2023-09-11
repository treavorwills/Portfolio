import "./App_2022.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home_2022 from "./Home_2022";
import About_2022 from "./About_2022";
import Projects_2022 from "./Projects_2022";
import Contact_2022 from "./Contact_2022";
import Resume_2022 from "./Resume_2022";
import Footer_2022 from "./Footer_2022";
import NavBar_2022 from "./NavBar_2022";
import Archive from "./Archive.js";

function Index_2022() {
  console.log("hello");

  return (
    <>
      <div className="navigation">
        <NavBar_2022 />
      </div>
        <Routes>
          <Route path="/Portfolio/archive/2022_2022" element={<Home_2022 />} />
          <Route path="/Portfolio/archive/about_2022" element={<About_2022 />} />
          <Route path="/Portfolio/archive/projects_2022" element={<Projects_2022 />} />
          <Route path="/Portfolio/archive/contact_2022" element={<Contact_2022 />} />
          <Route path="/Portfolio/archive" element={<Archive />} />
          <Route path="/Portfolio/archive/resume_2022" element={<Resume_2022 />} />
        </Routes>
      <div className="footer">
        <Footer_2022 />
      </div>
    </>
  );
}

export default Index_2022;
