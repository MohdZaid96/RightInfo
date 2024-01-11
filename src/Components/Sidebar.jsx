import React from "react";
import energy from "../Data/energy.png";
import water from "../Data/water.png";
import del from "../Data/del.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar2">
        <h5>DATA-IN</h5>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={energy} alt="Example" style={{ width: "33px" }} />
            Energy
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
        <div class="dropdown">
          <button
            class="btn dropdown-toggle text-white"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={water} alt="Example" style={{ width: "33px" }} /> Dropdown
            button
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
      </div>
      <div className="sidebar3">
        <h5>ANALYZE</h5>
        <p
          
        >
          <img src={energy} alt="Example" style={{ width: "33px",marginLeft:"-5px" }} />
          Energy
        </p>
        <p
          
        >
          <img
            src={del}
            alt="Example"
            style={{ width: "23px", marginRight: "5px" }}
          />
          Waste
        </p>
      </div>
      <button>Open Help Centre</button>
    </>
  );
};

export default Sidebar;
