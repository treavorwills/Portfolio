import React from "react";
import HeaderPhoto from "../HeaderPhoto";

export default function Archive() {
  return (
    <>
      <HeaderPhoto page="Archive"></HeaderPhoto>
      <section className="archive">
        <header className="archive-header">
          <p>
            I came back to update my portfolio a year after I made it. Instead
            of trashing the old repository and making a new one, I decided to
            make a new style sheet, refresh the content and keep the old styles
            so I can see how much I've learned.
          </p>
          <p>Maybe I'll add a new version each year.</p>
          <p>Maybe you'll click and get a kick out of it?</p>
        </header>
        <div className="archive-content">
            <div className="archive-site" id="2023">
                <a href="../Portfolio" className="year">2023</a>
                <a href="../Portfolio" className="image"><img srcSet={process.env.PUBLIC_URL + "/images/archive-sites/site_2023.png"} alt=""/></a>
                <a href="#" className="notes">Notes</a></div>
            <div className="archive-site" id="2022">
                <a href="./archive/2022" className="year">2022</a>
                <a href="./archive/2022" className="image"><img srcSet={process.env.PUBLIC_URL + "/images/archive-sites/site_2022.png"} alt=""/></a>
                <a href="#" className="notes">Notes</a></div>
        </div>
      </section>
    </>
  );
}
