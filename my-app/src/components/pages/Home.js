import React from "react";

function Home() {
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
        <p className="intro-text">I'm the one with the beard.</p>
    </>
  );
}

export default Home;
