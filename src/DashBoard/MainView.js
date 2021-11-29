
import React from 'react';
import { Route, Switch, Redirect,Router } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import Cards from './card/Cards';
import Product from './product/Product';
import Topbar from './topbar/Topbar';

const MainView = () => {
    return (
        <div>
               <Topbar /> 
               <Sidebar />
                <Cards />
        </div>
    )
}

export default MainView
