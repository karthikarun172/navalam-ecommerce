/** @format */

import React from "react";
import NavLink from "./NavLink";
import LogoutIcon from '@mui/icons-material/Logout';


const navigationRoute = [
  { id: "1", name: "Dashboard", RouteName: "/", active: true, Logos:<LogoutIcon/>},
  { id: "2", name: "Customer", RouteName: "/customer", active: false, Logos:<LogoutIcon/> },
  { id: "3", name: "Product", RouteName: "/product", active: false, Logos:<LogoutIcon/> },
  { id: "4", name: "Settings", RouteName: "/settings", active: false, Logos:<LogoutIcon/> },
  { id: "5", name: "Logout", RouteName: "/login", active: false, Logos:<LogoutIcon/> },
];


function NavBar() {
  return (
    <div>
      <div>
<<<<<<< HEAD
        <h5>logo</h5>
=======
        <div>
          <h3
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            Logo
          </h3>
          <h5
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "Roboto",
            }}
          >
            goes here
          </h5>
          <div
            style={{
              backgroundColor: "#274AB6",
              width: "70%",
              marginLeft: "40px",
              height: "2px",
            }}
          />
        </div>
>>>>>>> 179eb1a7f80b07184e8777b33fe3ecef71c8842b
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
<<<<<<< HEAD
          {navigationRoute.map((navData) => {
            return(
            <div>  
            <NavLink navData={navData} />  
          </div>   
          )})}
         {navigationRoute.map((navData)=>{
           <img src={navData.Logos} />
         })}
=======
          {navigationRoute.map((navData) => (
            <NavLink key={navData.id} navData={navData} />
          ))}
>>>>>>> 179eb1a7f80b07184e8777b33fe3ecef71c8842b
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
