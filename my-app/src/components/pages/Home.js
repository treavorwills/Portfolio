import React, { useState, useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai";

function Home() {
  const [description, setDescription] = useState("in white.");
  const [index, setIndex] = useState(0);

  const descriptions = [
    "with the beard",
    "between my two kids",
    "who is old",
    "who pays for everything",
    "without facepaint",
    "who controls the thermostat"
  ];

  const incrementArray = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    setDescription(descriptions[index % descriptions.length]);
  }, [index]);

  return (
    <section className="home">
      <div className="intro-text">
        <h1>Treavor Wills</h1>
        <p>web developer in Salt Lake City, Utah</p>
      </div>
      <section className="main-photo-container">
          <img
            className="main-photo"
            srcSet={process.env.PUBLIC_URL + "/images/tvc.png"}
          />
          <img
            className="main-photo reflection"
            srcSet={process.env.PUBLIC_URL + "/images/tvc.png"}
          />
      </section>
      <div className="sub-text">
        <p>
          I'm the one {description}<button className="changeDescriptionBtn" onClick={incrementArray}><AiOutlineReload></AiOutlineReload></button>
        </p>
      </div>
    </section>
  );
}

export default Home;
