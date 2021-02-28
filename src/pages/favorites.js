import React from 'react';
import '../css/favorites.css';
import Header from '../components/header.js';
import Loader from '../components/loader.js';
import Bnav from '../components/bnav.js';
import {motion} from 'framer-motion';
import imgEmpty from '../img/fi.png';

const Favorites = ()=>{

  return(
    <React.Fragment>
    <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1}}>
      <Loader />
    <div className="general-container-favorites">
        <div className="general-container-header-wh-home">
           <Header />
        </div>

        <div className="general-container-title-favorites-null">
          <h1 className="title-container-favorites-null">There is no items here!</h1>
          <img className="img-empty-container-favorites" src={imgEmpty} alt="image empty" />
        </div>

    </div>

    <Bnav />

    </motion.div>
    </React.Fragment>
  )
};

export default Favorites;
