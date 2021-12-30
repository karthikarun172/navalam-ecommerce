
import React from 'react';
import { Route, Switch, Redirect,Router } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import Cards from './card/Cards';
import Product from './product/Product';
import Topbar from './topbar/Topbar';
import Settings from './settings/Settings';
import AddUser from './adduser/AddUser';
import AddNewUser from './adduser/AddNewUser';
import CustomerList from './customer/CustomerList';
import EditProduct from './product/EditProduct';

const MainView = () => {
    return (
        <div>
               <Topbar />
               <Sidebar />
            <Switch>
                <Route path="/customerlist" component={CustomerList} />
                <Route path="/addnewuser" component={AddNewUser} />
                <Route path="/settings" component={Settings} />    
                <Route path="/product" component={Product} />
                <Route path="/editproduct" component={EditProduct} />
            </Switch>    
        </div>
    )
}

export default MainView