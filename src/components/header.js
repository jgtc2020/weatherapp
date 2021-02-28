import React, {useState} from 'react';
import '../css/header.css';
import logoHeader from '../img/logo.png';
import navMenuHeader from '../img/gray.png';
import {
  BrowserRouter as Router,
  Link,
  NavLink
  } from 'react-router-dom';

const Header = ()=>{

const [stateHeader, setStateHeader] = useState(false);

const handleAppear = ()=>{
  setStateHeader(true);
};

const handleDisappear = ()=>{
  setStateHeader(false);
};

  return(
    <React.Fragment>
    <div className="header-ego-cars-model">

    <div className="general-items-header">
      <i className="img-logo-header fab fa-cloudversify"></i>
        <h1 className="title-header-logo">Weather App</h1>
         <NavLink to="/" className="title-model-header span" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink to="/ficha-tecnica" className="title-model-header"  exact activeClassName="active" to="/favorites">Favorites</NavLink>
          <NavLink to="/ficha-tecnica" className="title-model-header"  exact activeClassName="active" to="/about">About</NavLink>
      </div>

      <div className="general-nav-menu-header">
        <h1 className="title-nav-menu-header">Menú</h1>
        <img className="img-nav-menu-header" onClick={handleAppear} src={navMenuHeader} alt="nav-menú" />
      </div>
    </div>

    <div className="general-container-aside-nav">
      <div className={stateHeader ? "active-header" : "general-aside-menu-ds"}>
       <div className="container general-container-aside-content">
         <h1 onClick={handleDisappear}  className="close-times-title"><i className="icon-close-aside-menu fas fa-times"></i>Close</h1>
            <NavLink to="/" className="title-aside-menu" exact activeClassName="active-aside" to="/">Home</NavLink>
             <NavLink to="/favorites" className="title-aside-menu" exact activeClassName="active-aside" to="/favorites">Favorites</NavLink>
            <NavLink to="/about" className="title-aside-menu" exact activeClassName="active-aside" to="/about">About Weather App</NavLink>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
};

export default Header;
