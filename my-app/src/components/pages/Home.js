import React, { useState, useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai";

function Home() {
  const [description, setDescription] = useState('in white.');
  const [index, setIndex] = useState(0);

  const descriptions = ['with the beard.', 'wearing the orange helmet.', 'between my two kids.', 'who is old.'];

  const incrementArray = () => {
    setIndex(index + 1);
  }

  useEffect(() => {
    setDescription(descriptions[(index % descriptions.length)]);
  }, [index]);

  return (
    <>
      <div className="intro-text">
        <h1>Treavor Wills</h1>
        <p>
          web developer in Salt Lake City, Utah
        </p>
      </div>
      <picture>
        <img className="main-photo" srcSet={process.env.PUBLIC_URL + '/images/tvc.png'}/>
      </picture>
        <p className="sub-text" >I'm the one {description} <button className="changeDescriptionBtn" onClick={incrementArray}><AiOutlineReload></AiOutlineReload></button> </p> 
    </>
  );
}

export default Home;
