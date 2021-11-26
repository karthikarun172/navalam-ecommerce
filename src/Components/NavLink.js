/** @format */

import React from "react";

function NavLink({ navData }) {
  return (
    <li
      style={{
        backgroundColor: navData.RouteName ? "#F1F5F9" : "#1C3FAA",
        color: navData.RouteName ? "#1C3FAA" : "#F1F5F9",
        padding: "15px",
        marginBottom: "20px",
        borderRadius: `30px 0 0 30px`,
        width: "80%",
        cursor: "pointer",
        textAlign: "center",
      }}
      key={navData.id}
    >
      {navData.name}
    </li>
  );
}

export default NavLink;
