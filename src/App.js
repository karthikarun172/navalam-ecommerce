/** @format */
import Login from "./Pages/Login";
import Order from "./Pages/Order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import Sidebar from './DashBoard/sidebar/Sidebar';
import MainView from './DashBoard/MainView';
import Product from './DashBoard/product/Product';
import Cards from './DashBoard/card/Cards';
import Topbar from './DashBoard/topbar/Topbar';


function App() {
  return (
    <div>
      <Route path="/login"  component={Login} />
      <Switch>
        <PrivateRoute path="/" component={MainView} />
      </Switch>
    </div>
  );
}

export default App;