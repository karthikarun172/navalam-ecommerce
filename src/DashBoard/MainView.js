
import React from 'react';
import { Route, Switch, Redirect,Router } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import Cards from './card/Cards';
import Product from './product/Product';
import Topbar from './topbar/Topbar';
import Settings from './settings/Settings';
import AddUser from './adduser/AddUser';


const MainView = () => {
    return (
        <div>
               <Topbar />
               <Sidebar />
                {/* <Cards /> */}
            <Switch>
                <Route path="/settings" component={Settings} />    
                <Route path={"/adduser"} component={AddUser} />
                <Route path="/product" component={Product} />
            </Switch>    
        </div>
    )
}

export default MainView
