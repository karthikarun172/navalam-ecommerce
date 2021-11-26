/** @format */

import React from "react";
import NavLink from "./NavLink";

const navigationRoute = [
  { id: "1", name: "Dashboard", RouteName: false },
  { id: "2", name: "Dashboard", RouteName: true },
  { id: "3", name: "Dashboard", RouteName: false },
  { id: "4", name: "Dashboard", RouteName: false },
  { id: "5", name: "Dashboard", RouteName: false },
];

function NavBar() {
  return (
    <div>
      <div>
        <h3>logo</h3>
        <h5>logo</h5>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            listStyleType: "none",
            color: "white",
            marginTop: "50px",
          }}
        >
          {navigationRoute.map((navData) => (
            <NavLink navData={navData} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
