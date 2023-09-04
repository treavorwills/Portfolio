import React from "react";

function Home() {
  return (
    <>
      <div className="intro-text">
        <h1 className="name">Treavor Wills</h1>
        <p className="description">
          web developer in Salt Lake City, Utah
        </p>
      </div>
      <picture>
        <img className="main-photo" srcSet={process.env.PUBLIC_URL + '/images/tvc.png'}/>
      </picture>
    </>
  );
}

export default Home;
