
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import Cards from './card/Cards';
import Product from './product/Product';

const MainView = () => {
    return (
        <div>
            <Sidebar />
            <Switch>
                <Route path="/product" component={Product}/>
            </Switch>
            <Cards />
        </div>
    )
}

export default MainView
