import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <Link>ABOUT &#x1F3D8;</Link>
        </li>
        <li className="nav-item">
          <Link>BLOG &#x270D;</Link>
        </li>
        <li className="nav-item">
          <Link>WORK &#x1F5A5;</Link>
        </li>
        <li className="nav-item">
          <Link>TIMELINE &#x1F366;</Link>
        </li>
        <li className="nav-item">
          <Link>CONTACT &#x1F4DE;</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
