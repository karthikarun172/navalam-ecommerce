/** @format */
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Sidebar from './DashBoard/sidebar/Sidebar';
// import Product from "./Pages/Product";
// import Customer from "./Pages/Customer";
// import Settings from "./Pages/Settings";
import MainView from './DashBoard/MainView';



function App() {
  return (
    <div>
      <Switch>
        <Route path="/login"  component={Login} />
        <PrivateRoute path="/" component={MainView} />
        {/* <PrivateRoute path="/" exact component={Order} /> */}
        {/* <Route path="/MainView" component={MainView} /> */}
        {/* <PrivateRoute path="/customer" component={Customer} /> */}
        {/* <PrivateRoute path="/settings" component={Settings} /> */}
        {/* <PrivateRoute path="/product" component={Product} /> */}
      </Switch>
    </div>
  );
}

export default App;