
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import AddItems from './Components/AddItems/AddItems';
import Header from './Components/Home/Header';
import Login from './Components/LoginPage/Login';
import Admin from './Components/Admin/Admin';
import CheckOut from './Components/CheckOut/CheckOut';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import PrivateRoute from './Components/PtivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <userContext.Provider value = {[loggedinUser,setLoggedinUser]}>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/Order">
            <Order />
          </PrivateRoute>
          <Route path="/addItem">
            <AddItems />
          </Route>
          <PrivateRoute path="/Admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path ="/Checkout/:_id">
            <CheckOut />
          </PrivateRoute>
          <Route path="/ManageProduct">
            <ManageProduct />
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
