/** @format */

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect } from "react";
import NavBar from "./NavBar";

function Layout(props) {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  useEffect(() => {
    console.log(mediumScreen, "sds");
  }, []);

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
            width: mediumScreen ? "20%" : "13%",
            backgroundColor: "#1C3FAA",
            height: "auto",
            alignSelf: "flex-start",
          }}
        >
          <NavBar />
        </div>
        <div style={{ width: mediumScreen ? "78%" : "86%" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F1F5F9",
              height: "120vh",
              borderRadius: "40px",
              alignSelf: "flex-end",
              marginTop: "20px",
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
