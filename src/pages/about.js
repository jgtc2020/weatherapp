import React,  {useState} from 'react';
import '../css/about.css';
import {AnimatePresence, motion} from 'framer-motion';
import Header from '../components/header.js';
import Loader from '../components/loader.js';
import Bnav from '../components/bnav.js';
import imgCol7 from '../img/col-7.jpg';
import imgCol5 from '../img/col-5.jpg';

const About = ()=>{

  return(
    <React.Fragment>
    <motion.div
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      animate={{opacity: 1}}>
      <Loader />
      <div className="general-container-header-wh-home">
         <Header />
      </div>

      <div className="banner-weather-about">
        <div className="container general-container-title-about-wh">
          <h1 className="title-about-wh">¡About weather app!</h1>
          <i className="icon-banner-wh-about fab fa-cloudversify"></i>
        </div>
      </div>


      <div className="container container-text-weather-about">
        <p className="text-weather-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>


      <div className="container-fluid container-images-weather-about">
        <div className="row">
          <div className="col-xl-7">
            <div className="general-container-image-col-7">
              <img className="img-col-7-wh-about" src={imgCol7} alt="imagen col 7" />
            </div>
          </div>
          <div className="col-xl-5">
             <div className="general-container-image-col-5">
             <img className="img-col-7-wh-about" src={imgCol5} alt="imagen col 7" />
             </div>
          </div>
        </div>
      </div>



      <Bnav/>
    </motion.div>
    </React.Fragment>
  )
};

export default About;
