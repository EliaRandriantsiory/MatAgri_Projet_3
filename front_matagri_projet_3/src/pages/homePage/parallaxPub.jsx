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
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-contain">
                {/* <h1 class="text-success">MATAgri</h1> */}
                  <h3 className="text-success">
                    Gagnez en productivité grâce à notre application de mutualisation des matériels agricoles.
                  </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParallaxPub;
