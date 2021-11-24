/** @format */

import React from "react";
import { TextField } from "@mui/material";

function Inputs({ name, label, value, error = null, onChange, ...rest }) {
  return (
    <TextField
      {...rest}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}

export default Inputs;
