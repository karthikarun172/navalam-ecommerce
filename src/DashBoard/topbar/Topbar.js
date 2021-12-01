import React,{useState,useRef} from 'react'
import "./topbar.css";
import { NotificationsNone, Language, Settings } from  "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import LogOutModal from '../modal/LogOutModal';
// import { useNavigate } from 'react-router';


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

  // const navigate = useNavigate();
  const ref = useRef();

    return (
        <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">NALVANAM ADMIN DASHBOARD</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <div className="topbarIconContainer">
              <LogoutIcon onClick={()=>handleClickOpen()} />
            </div>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          </div>
        </div>
            <LogOutModal 
            openIt={openModal} 
            closeIt={()=>{handleClose()}}
             />
      </div>
    )
}

export default Topbar