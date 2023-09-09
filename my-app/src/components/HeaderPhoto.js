import React from "react";

export default function HeaderPhoto() {
  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + "/images/tvc2.png"} className="header-photo"></img>
      <p className="header-name">Treavor Wills</p>
    </div>
  );
}
