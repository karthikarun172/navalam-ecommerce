/** @format */
import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory, useLocation } from "react-router";
import { useState } from "react";
import ApprovalIcon from '@mui/icons-material/Approval';

function NavLink({ navData,Logos }) {
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
<<<<<<< HEAD
      {/* <h6>{navData.Logos}</h6> */}
        {/* <img src={navData.Logos} style={{width:'5%'}}/> */}

        <p style={{ paddingLeft: "10px" }}>{navData.name}</p>
=======
        <RiDashboardFill size={24} />
        <p style={{ paddingLeft: "10px", fontFamily: "Roboto" }}>
          {navData.name}
        </p>
>>>>>>> 179eb1a7f80b07184e8777b33fe3ecef71c8842b
      </div>
    </li>
  );
}

export default NavLink;
