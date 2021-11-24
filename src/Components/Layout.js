/** @format */

import React from "react";

function Layout(props) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#1C3FAA",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "15%" }}>
        <h2>navbar</h2>
      </div>
      <div
        style={{
          width: "85%",
          backgroundColor: "white",
          height: "90vh",
          borderRadius: "40px",
          transform: "translate(-50%,-50%)",
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
