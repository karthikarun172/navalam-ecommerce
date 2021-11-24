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
    <div style={{ height: "100vh", backgroundColor: "#1C3FAA" }}>
      <div
        style={{
          height: "90vh",
          backgroundColor: "#F1F5F9",
          width: "96%",
          position: "absolute",
          transform: `translate(-50%,-50%)`,
          left: "50%",
          top: "50%",
          borderRadius: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%,-50%)`,
            left: "50%",
            top: "50%",
            width: "20%",
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "200px",
              width: "300px",
            }}
            onSubmit={handleSubmit}
          >
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
            <Button type="submit">login</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
