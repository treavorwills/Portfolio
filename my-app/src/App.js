import "./App.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects.js";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Archive from "./components/pages/Archive.js";

function App() {
  console.log("hello");

  return (
    <>
      <div className="navigation">
        <NavBar />
      </div>
      <div className="page">
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/Portfolio/about" element={<About />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
          <Route path="/Portfolio/contact" element={<Contact />} />
          <Route path="/Portfolio/archive" element={<Archive />} />
          <Route path="/Portfolio/resume" element={<Resume />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
