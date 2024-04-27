import { motion } from 'framer-motion';
import React from 'react';
import logo from '../../pages/assets/images/caroussel/Background2.png';

function ParallaxPub() {
  const bannerStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'block'
  };

  return (
    <section className="p-0">
      <div className="full-banner parallax text-center p-left blur-up lazyloaded" style={bannerStyle}>
        <img src={logo} alt="" className="bg-img blur-up lazyload" style={{display: 'none'}} />
        <div className="container-fluid">
          <div className="row">
            <div className="banner-contain">
              <div className="row"> 
                <div className="row">  
                  <div className="col">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                  <p className="text-success fs-1">"Augmentez vos récoltes,<br/><br/>mutualisez vos matériels agricoles!"</p>
                  </motion.div>
                  </div>
                  <div className="col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ParallaxPub;
