import React,{useState,useRef} from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from  "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import LogOutModal from '../modal/LogOutModal';
import Cards from "../card/Cards";
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../../Assests/LogoEnglish.jpeg';


const Topbar = () => {

  const [openModal, setOpenModal] = useState(false)

  const handleClickOpen = () => {
    setOpenModal(true);
  };
   
    const handleClose = (e) => {
      setOpenModal(false);
      if (openModal && ref.current && !ref.current.contains(e.target)) {
        setOpenModal(false)
      }
    };

  window.addEventListener("mousedown",handleClose)

  const ref = useRef();

    return (
    <React.Fragment> 
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">NALVANAM ADMIN DASHBOARD</span>
          </div>
          <div className="topRight">
          <div className="topbarIconContainer">
              <PersonIcon  
                className="MuiIcon"
              />
          </div>
            <div className="topbarIconContainer">
              <LogoutIcon 
              onClick={()=>handleClickOpen()} 
              className="MuiIcon"  
              />
            </div>
          </div>  
        </div>
            <LogOutModal 
            openIt={openModal} 
            closeIt={()=>{handleClose()}}
             />
      </div>
  </React.Fragment>     
    )
}

export default Topbar