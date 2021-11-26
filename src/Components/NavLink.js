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
        borderRadius: `30px 0 0 30px`,
        width: "100%",
        cursor: "pointer",
        height: "auto",
      }}
      onClick={() => {
        history.push(navData.RouteName);
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
      {/* <h6>{navData.Logos}</h6> */}
        {/* <img src={navData.Logos} style={{width:'5%'}}/> */}

        <p style={{ paddingLeft: "10px" }}>{navData.name}</p>
      </div>
    </li>
  );
}

export default NavLink;
