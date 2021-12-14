import React from "react";
//import "./sty";

function searchMain() {
  return (
    <div className="wrap">
      <div className="search">
        <input type="search" placeholder="tyype cityy name..." id="search" />
      </div>
      <button className="searchButton">Search City</button>
    </div>
  );
}

export default searchMain;
