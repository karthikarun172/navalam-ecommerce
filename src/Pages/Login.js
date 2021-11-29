/** @format */
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm, Form } from "../CustomHooks/useForm";
import Inputs from "../Components/Controls/Inputs";
import { useHistory } from "react-router";
import config from "../config.json";
import httpService from "../Services/httpService";
import { useState,useRef,createRef,useEffect } from "react";
import { useLottie } from "lottie-react";
import * as animationData from "../Assests/LoadingAnimation.json";
import LoadingAnimation from "../Components/LoadingAnimation";
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import BackgroundImg from '../Assests/right.png';
import Logo from '../Assests/LogoGreen.jpeg';



const initialFValues = {
  email: "",
  password: "",
};

const styles = makeStyles((theme) => ({
  mainCont: {
    height: "100vh",
    backgroundColor: "#698a37",
    ["@media (max-width:780px)"]: {
      backgroundColor: "red",
    },
  },
  Logo:{
    width:'120%',
    marginLeft:'1%'
  }
}));


function Login() {
  const history = useHistory();
  const classes = styles();
  const [Loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(false);
  


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
  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validate()) {
      httpService
        .post(config.apiEndPoint + "/admin/login", values)
        .then((res) => {
          setLoading(false);
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("userDetails", JSON.stringify(res.data.user));
          history.push("/");
          document.title = "Admin DashBoard"
        })
        .catch((er) => {
          console.log(er);
          setLoading(false);
          setValidating(true)
        });
    }
  };
  console.log(Loading);

  return (
    <div className={classes.mainCont}>
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
       <Grid container component="main" sx={{ height: '91vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:'99%'
          }}
        />
    </Grid>    
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%,-50%)`,
            left: "75%",
            top: "45%",
            width: "20%",
          }}
        >
        <img src={Logo} className={classes.Logo}/>
          {Loading ? ( 
            <div>
            <LoadingAnimation />
            </div>
          ) : (
            <React.Fragment> 
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "350px",
                width: "300px",
              }}
              onSubmit={handleSubmit}
            >
        {validating ? (<p style={{color:'red'}}>Invalid Username or Password</p>):(null)}
              {/* <h2>LOGIN-IN</h2> */}
              <Inputs
                type="email"
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
              <Button variant="contained" type="submit" style={{backgroundColor:'#304F12'}}>
                login 
              </Button>
            </Form>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login
