import React,{useEffect,useState} from 'react'
import Inputs from '../../Components/Controls/Inputs';
import './addnewuser.css';
import {useForm,Form} from '../../CustomHooks/useForm';
import { makeStyles } from '@mui/styles';
import { ThemeConsumer } from 'styled-components';
import {Button} from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const initialFValues ={
    email:"",
    password:"",
    mobileno:""
}


const AddNewUser = () => {
   
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

      
      const useStyles = makeStyles({
          InputField:{
              width:'50%',
              margin:'3%'
            },
        Box:{
            width:'50%',
            margin:'3%'
        },
        Button:{
            margin:'3%'
        }
        })
        
       const classes = useStyles();

       const [admin, setadmin] = useState('')
       const handleChange = (event) => {
        setadmin(event.target.value);
      };


    return (
        <div className="addnewuser">
        <h1>Add New User Details</h1>
            <Inputs 
                className={classes.InputField}
                type="email"
                label="Email"
                placeholder="Enter Email ID"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
            />
            <Inputs 
                className={classes.InputField}
                type="password"
                label="password"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
            />

            <Inputs 
                className={classes.InputField}
                label="Mobile Number"
                type='phone'
            />

<Box className={classes.Box}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">AdminType</InputLabel>  
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={admin}
          onChange={handleChange}
          label="AdminType"
        >
          <MenuItem value={10}>ADMIN</MenuItem>
          <MenuItem value={10}>SUPER ADMIN</MenuItem>
          <MenuItem value={10}>SHOP VENDOR</MenuItem>
          <MenuItem value={10}>DELIVERY</MenuItem>
        </Select>
      </FormControl>
    </Box>


<br/>
            <Button variant='contained' color="primary" className={classes.Button}>Submit</Button>
        </div>
    )
}

export default AddNewUser
