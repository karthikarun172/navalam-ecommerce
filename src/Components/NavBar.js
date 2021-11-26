/** @format */

import React from "react";
import NavLink from "./NavLink";
import LogoutIcon from '@mui/icons-material/Logout';


const navigationRoute = [
  { id: "1", name: "Dashboard", RouteName: "/", active: true, Logos:LogoutIcon },
  { id: "2", name: "Customer", RouteName: "/customer", active: false, Logos:LogoutIcon },
  { id: "3", name: "Product", RouteName: "/product", active: false, Logos:LogoutIcon },
  { id: "4", name: "Settings", RouteName: "/settings", active: false, Logos:LogoutIcon },
  { id: "5", name: "Logout", RouteName: "/login", active: false, Logos:LogoutIcon },
];


function NavBar() {
  return (
    <div>
      <div>
        <h5>logo</h5>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            listStyleType: "none",
            color: "white",
            marginTop: "50px",
          }}
        >
          {navigationRoute.map((navData) => {
            return(
            <div>  
            <NavLink navData={navData} />  
          </div>   
          )})}
         {navigationRoute.map((navData)=>{
           <img src={navData.Logos}/>
         })}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
