import React from 'react';
import '../css/bnav.css';
import {
  BrowserRouter as Router,
  Link,
  NavLink
  } from 'react-router-dom';

const Bnav = ()=>{

  return(
    <React.Fragment>
    <div className="general-container-bottom-nav-weather">
      <div className="container-items-bottom-nav-weather">
          <NavLink to="/" exact activeClassName="nav" to="/"><i class="icon-bnav-left fas fa-home"></i></NavLink>
          <NavLink to="/" exact activeClassName="nav" to="/favorites"><i class="icon-bnav-right fas fa-heart"></i></NavLink>
          <NavLink to="/" exact activeClassName="nav" to="/about"><i class="fas fa-info-circle"></i></NavLink>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Bnav;
