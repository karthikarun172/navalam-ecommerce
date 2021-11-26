/** @format */

import React from "react";
import NavBar from "./NavBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Layout(props) {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#1C3FAA",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            width: "13%",
            backgroundColor: "#1C3FAA",
            height: "auto",
            alignSelf: "flex-start",
          }}
        >
          <NavBar />
        </div>
        <div style={{ width: "49%" }}>
          <div
            style={{
              width: "175%",
              backgroundColor: "#F1F5F9",
              height: "90vh",
              borderRadius: "24px",
              alignSelf: "flex-end",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
