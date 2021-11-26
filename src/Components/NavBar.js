/** @format */

import React from "react";
import NavLink from "./NavLink";

const navigationRoute = [
  { id: "1", name: "Dashboard", RouteName: "/", active: true },
  { id: "2", name: "Customer", RouteName: "/customer", active: false },
  { id: "3", name: "Product", RouteName: "/product", active: false },
  { id: "4", name: "Settings", RouteName: "/settings", active: false },
  { id: "5", name: "Logout", RouteName: "/login", active: false },
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
