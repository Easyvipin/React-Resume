import React from "react";
import Navlinks from "./Navlinks";
import Profile from "./Profile";
import SocialLinks from "./SocialLinks";

const SideBar = () => {
  return (
    <section className="sideBar">
      <Profile />
      <Navlinks />
      <SocialLinks />
    </section>
  );
};

export default SideBar;
