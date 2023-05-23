import React from "react";
import "./sidebar.scss";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="HomeItem">
        <span className="Home">Home</span>
        <div className="Border"></div>
      </div>

      <div className="ServicesItem">
        <span className="Home">Services</span>
        <div className="Border">
          <div className="bottom"></div>
        </div>
      </div>

      <div className="NewsItem">
        <span className="Home">News</span>
        <div className="Border">
          <div className="bottom"></div>
        </div>
      </div>

      <div className="BlogItem">
        <span className="Home">Blog</span>
        <div className="Border">
          <div className="bottom"></div>
        </div>
      </div>

      <div className="ContactItem">
        <div className="Rectangle">
          <span className="Home">Contact</span>
          <div className="Border">
            <div className="bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
