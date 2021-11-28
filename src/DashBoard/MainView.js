
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar"
import Cards from './card/Cards';

const MainView = () => {
    return (
        <div>
            <Sidebar />
            <Cards />
        </div>
    )
}

export default MainView
