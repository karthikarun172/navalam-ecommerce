import React,{useEffect} from 'react';
import './settings.css'
import AddIcon from '@mui/icons-material/Add';
import { useHistory,Link } from 'react-router-dom';


const Settings = () => {
    

    const history = useHistory();
        
    return (
    <div className="settings">
          <div className="featuredItem" >
          <span className="featuredTitle">ADD USER</span>
          <div className="featuredMoneyContainer">
              <span className="featuredIcon"><AddIcon fontSize='large'/></span> 
          </div>
        </div>            
    </div>
  )
}

export default Settings
