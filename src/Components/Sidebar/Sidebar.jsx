import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./Sidebardata";

import "../../Styles/Sidebar.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebar]);

  return (
    <>
      <div className="navbar">
        <a href="#" className="menu-bars" onClick={showSidebar}>
          <FaBars style={{ color: "White" }} />
        </a>
      </div>
      <nav ref={sidebarRef} className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={(e) => e.stopPropagation()}>
          <li className="navbar-toggle">
            <a href="#" className="menu-bars" onClick={closeSidebar}>
              <AiOutlineClose style={{ color: "White" }} />
            </a>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <a href={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
