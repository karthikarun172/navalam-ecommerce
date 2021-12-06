import React,{useEffect} from 'react'
import Inputs from '../../Components/Controls/Inputs';
import './addnewuser.css';
import {useForm,Form} from '../../CustomHooks/useForm'

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

    return (
        <div className="addnewuser">
            <Inputs
                type="email"
                label="Email"
                placeholder="Enter Email ID"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
            />
        </div>
    )
}

export default AddNewUser
