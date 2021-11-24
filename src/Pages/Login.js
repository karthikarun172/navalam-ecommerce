/** @format */

import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm, Form } from "../CustomHooks/useForm";
import Inputs from "../Components/Controls/Inputs";
import axios from "axios";
import { useHistory } from "react-router";
import config from "../config.json";
import httpService from "../Services/httpService";

const initialFValues = {
  email: "",
  password: "",
};
function Login() {
  const history = useHistory();
  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      httpService
        .post(config.apiEndPoint + "/admin/login", values)
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          history.push("/");
        })
        .catch((er) => console.log(er));
      resetForm();
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Inputs
          label="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <Inputs
          type="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button type="submit">login</button>
      </Form>
    </div>
  );
}

export default Login;
