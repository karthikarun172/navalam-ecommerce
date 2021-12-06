import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useHistory,Link } from 'react-router-dom';
import AddNewUser from './AddNewUser';

const AddUser = () => {
    return (
        <div className="featuredItem">
        <div className="featuredMoneyContainer">
            <span className="featuredIcon"><AddIcon fontSize='large'/></span>
        <br/>    
        </div>
        <Link to="/addnewuser">
        <span className="featuredTitle">ADD USER</span>
        </Link>     
      </div> 
    )
}

export default AddUser
