import React from "react";
/* import user from "../Images/user.png";
 */
import vipin from "../Images/vipin.png";

const Profile = () => {
  return (
    <div className="profile">
      <img class="profile-img" src={vipin} alt="" />
      <h4>Vipin Chandra</h4>
    </div>
  );
};

export default Profile;
