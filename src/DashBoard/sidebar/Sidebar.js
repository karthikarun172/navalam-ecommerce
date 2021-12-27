import "./sidebar.css";
import React from 'react';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link,useHistory } from "react-router-dom";
import Logo from '../../Assests/LogoEnglish.jpeg';


export default function Sidebar() {

  const history = useHistory();

  return (
<React.Fragment>
{/* <img src={Logo} className="Logo" /> */}
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" >
            <li className="sidebarListItem active">
              <DashboardIcon className="sidebarIcon" onClick={()=>{history.push("/")}} />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link  className="link" to='/customerlist'>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
               Customers
              </li>
            </Link>
            <Link to='/product' className="link">
              <li className="sidebarListItem" >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to='/settings' className="link">
            <li className="sidebarListItem">
              <SettingsIcon className="sidebarIcon" />
              Settings
            </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
             Orders
            </li>
          </ul>
        </div>
      </div>
    </div>
</React.Fragment>  
  );
}
