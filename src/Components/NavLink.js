/** @format */

import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useHistory, useLocation } from "react-router";
import { useState } from "react";

function NavLink({ navData }) {
  const history = useHistory();
  const location = useLocation();

  return (
    <li
      style={{
        backgroundColor:
          location.pathname === navData.RouteName ? "#F1F5F9" : "#1C3FAA",
        color: location.pathname === navData.RouteName ? "#1C3FAA" : "#F1F5F9",
        marginBottom: "20px",
        width: "100%",
        cursor: "pointer",
        height: "auto",
      }}
      onClick={() => {
        if (navData.RouteName === "/login") {
          localStorage.removeItem("token");
          localStorage.removeItem("userDetails");
          history.push(navData.RouteName);
        } else {
          history.push(navData.RouteName);
        }
      }}
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
        <p style={{ paddingLeft: "10px", fontFamily: "Roboto" }}>
          {navData.name}
        </p>
      </div>
    </li>
  );
}

export default NavLink;
