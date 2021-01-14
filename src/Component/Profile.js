import React from "react";
import user from "../Images/user.png";

const Profile = () => {
  return (
    <div className="profile">
      <img class="profile-img" src={user} alt="" />
      <h1>VIPIN CHANDRA</h1>
    </div>
  );
};

export default Profile;
