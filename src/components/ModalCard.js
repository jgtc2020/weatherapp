import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';


const ModalCard = ({ todo, onClose }) => {
    return (
      <React.Fragment>
        <div className='active-container-weather-card-info'>
          <div className="col-xl-3">
            <div className="card-text-weather-info">
             <div className="banner-card-wh-info">
             <i className="img-logo-card-wh fab fa-cloudversify"></i>
              <h1 className="title-banner-wh-card-info">Weather App</h1>
              <i class="icon-close-card-wh-info fas fa-times" onClick={onClose}></i>
             </div>
             <div className="container-text-card">
             <h1 className="title-card-weather-info">{todo.name}</h1>
             <p className="text-card-weather-info">{todo.province}</p>
             <h1 className="title-card-weather-info-wh">{todo.weather.tempDesc}</h1>
             <button className="btn-card-wh-info" type="button" name="button">Agregar<i class="icon-btn-card-wh-info fas fa-heart"></i></button>
             </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    );
};

export default ModalCard;
