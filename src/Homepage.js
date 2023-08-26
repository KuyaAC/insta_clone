import React from "react";
import "./Homepage.css";
import Sidenav from "./nav/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav"></div>
      <div className="homepage__timeline"></div>
      <div className="homepage__suggestion"></div>
    </div>
  );
}

export default Homepage;
