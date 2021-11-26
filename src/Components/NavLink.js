/** @format */

import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useHistory } from "react-router";

function NavLink({ navData }) {
  const history = useHistory();
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
      onClick={() => history.push(navData.RouteName)}
      key={navData.id}
    >
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RiDashboardFill size={24} />
        {navData.name}
      </div>
    </li>
  );
}

export default NavLink;
