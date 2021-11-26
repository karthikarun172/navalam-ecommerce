/** @format */

import Login from "./Pages/Login";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import Customer from "./Pages/Customer";
import { Route, Switch, Redirect } from "react-router-dom";
import Settings from "./Pages/Settings";
import PrivateRoute from "./Components/PrivateRoute";
import MainView from './DashBoard/MainView';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/MainView" component={MainView} />
        <Route path="/login"  component={Login} />
        <PrivateRoute path="/customer" component={Customer} />
        <PrivateRoute path="/settings" component={Settings} />
        <PrivateRoute path="/product" component={Product} />
        <PrivateRoute path="/" exact component={Order} />        
      </Switch>
    </div>
  );
}

export default App;