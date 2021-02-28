import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

const Card = ({ item, handleItem, handleFavorite }) => {
    return (
        <div
            data-aos='fade-up'
            className='col-12 col-md-6 col-lg-4 col-xl-3'
        >
            <div className='card'>
                <h1 className='title-card-weather'>{item.name}</h1>
                <p className='text'>{item.province}</p>
                <h1 className='title-card-weather-of'>
                    {item.weather.tempDesc}
                </h1>
                <div className='container-btns-card-weather'>
                    <button
                        className='btn-card-models-cars'
                        type='button'
                        name='button'
                        onClick={() => handleItem(item)}
                    >
                        Ver más
                    </button>
                    <i
                        className='icon-heart-btn-card far fa-heart'
                        onClick={() => handleFavorite(item)}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default Card;
