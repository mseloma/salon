import React, { Component } from 'react';
import logo from './media/logo.jpeg';
import './App.css';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import AboutUs from './pages/AboutUs.jsx'
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import Catalogue from  './pages/Catalogue'

const NavigationOptions = [
  { href  : "/",
    name  : "Home" },
  { href  : "/catalogue",
  name  : "Catalogue" },
  { href  : "/bookings",
  name  : "Bookings" },
  { href  : "/about",
  name  : "About" }
]
 
const Navigator = (props) => (


  
    <Nav tabs>
      {NavigationOptions.map(({href, name}) => (      
      <NavItem key={name}>
        <NavLink href={href} active={href===props.location.pathname}>{name}</NavLink>
      </NavItem>
      ))}
    </Nav>
)


const NavWithRoute = withRouter(Navigator);

class App extends Component {

  constructor(props) {
    super(props);
  }

  activate() {
    this.setState({
    });
  }

  

  render() {

    return (   
     
      <div>

        <Router>
          <NavWithRoute/>
          <Route path="/" exact component={Home} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/about" component={AboutUs} />
        </Router>   
        <br/>   
      </div>
    );
  }
}

export default App;
