/** @format */

import React from "react";
import { useHistory } from "react-router";

function Order() {
  const history = useHistory();
  return (
    <div>
      Order
      <button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login");
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Order;
