function HomeSlide({}) {
    // console.log(homeSlideComponent.imageName)
    // console.log(homeSlideComponent.title)
    // console.log(homeSlideComponent.slogan)
    // console.log(homeSlideComponent.description)
  return (
    <section className="p-0">
      <div className="slide-1 home-slider">
        <div>
          <div className="home text-start">
            <img
              src= '/front_matagri_projet_3/public/assets/images/home-banner/NH_T6_DC.jpg' 
              alt=""
              className="bg-img blur-up lazyload"
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  {
                    
                        <div className="slider-contain">
                    <div>
                      <h1 class="text-white">MatAgri</h1>
                      <h4 class="text-success">
                      Gagnez en productivité grâce à notre
                      </h4>
                      <h4 class="fst-italic text-white">
                      application de mutualisation des matériels agricoles.
                      </h4>
                      <a href="#" class="btn btn-solid">
                        Voir les matériels disponible
                      </a>
                    </div>
                  </div>
                    
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlide;
