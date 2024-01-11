import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Data/Logo.png";
import profile from "../Data/profile.png";
import bell from "../Data/bell.png";
import group from "../Data/group.png";


const Navbar = () => {
  return (
    <div className="navbar" >
      <div className="firstNav">
        <img src={Logo} alt="Logo" />
      </div>
      
        <div className="midNav">
          <img src={group} alt="Group Icon"/>
          <h5>Category-1</h5>
        </div>
        <div
          className="lastNav"
        >
          <div class="dropdown">
            <button
              class="btn dropdown-toggle text-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={profile} alt="profile" style={{ width: "33px" }} />
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="navbell">
          <img src={bell} alt="Notification" />
          </div>
        </div>
      
    </div>
  );
};

export default Navbar;
