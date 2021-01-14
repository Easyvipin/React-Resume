import React from "react";
import twitter from "../Images/twitter.svg";
import github from "../Images/github.svg";
const SocialLinks = () => {
  return (
    <div class="Social">
      <div className="social-one">
        Code
        <img src={github} alt="" />
        Tweet
        <img src={twitter} alt="" />
      </div>
      <div className="other-social">
        <ul class="social-links">
          <li className="social-item">
            <i class="fab fa-linkedin-in"></i>
          </li>
          <li className="social-item">&copy;easyvipin &#x1F680;</li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
