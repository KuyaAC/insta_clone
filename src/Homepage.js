import React from "react";
import "./Homepage.css";
import Sidenav from "./nav/Sidenav";
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
      <div className="homepage__suggestion"></div>
    </div>
  );
}

export default Homepage;
