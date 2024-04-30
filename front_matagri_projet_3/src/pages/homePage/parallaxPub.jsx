import { motion, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import logo from '../../pages/assets/images/caroussel/Background2.png';

function ParallaxPub() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setScrollPosition(y);
    });
    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const bannerStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'block'
  };
  const textColor = scrollPosition > 900 ? '#004225' : 'white'

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
                    <motion.div transition={{duration: 3}}>
                      <p className="fs-1" style={{ color: textColor }}>
                        "Augmentez vos récoltes, <br/><br/>mutualisez vos matériels agricoles !"
                      </p>
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
