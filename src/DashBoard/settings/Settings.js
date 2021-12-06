import React,{useEffect} from 'react';
import './settings.css'
import AddIcon from '@mui/icons-material/Add';
import { useHistory,Link } from 'react-router-dom';
import AddUser from '../adduser/AddUser';


const Settings = () => {
    

    const history = useHistory();
        
    return (
    <div className="settings">
        <AddUser />      
    </div>
  )
}

export default Settings
