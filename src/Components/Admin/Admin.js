import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit } from '@fortawesome/free-solid-svg-icons'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddItems from '../AddItems/AddItems';
import ManageProduct from '../ManageProduct/ManageProduct';
const Admin =
  [
    
    {
      path: "/addItem",
      sidebar: () => <div></div>,
      main: () => <AddItems />
    },
    {
      path: "/ManageProduct",
      sidebar: () => <div></div>,
      main: () => <ManageProduct/>
    }
  ];
  
  export default function SidebarExample() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "8px",
              width: "25%",
              background: "#f7f563"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
             
              <li>
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em' }} /> <Link to="/addItem">Add Product</Link>
              </li>
              <li>
              <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1em' }} /> <Link to="/ManageProduct">Manage Product</Link>
              </li>
            </ul>
  
            <Switch>
              {Admin.map((route, index) => (
                
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>
  
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {Admin.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }