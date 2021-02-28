import React,  {useState} from 'react';
import logoHeader from '../img/logo.png';
import '../css/loader.css';

const Loader = ()=>{

const [loader, setLoader] = useState(true);

  const desappear = ()=> {
      setLoader(false);
    };

    setTimeout(desappear, 750);

  return(
    <React.Fragment>

    <div className={loader ? "loader-container" : "loader-inactive"}>
    <i className="img-logo-container fab fa-cloudversify"></i>
        <h1 className="title-logo-container">Weather App</h1>
    </div>

    </React.Fragment>
  )
};

export default Loader;
