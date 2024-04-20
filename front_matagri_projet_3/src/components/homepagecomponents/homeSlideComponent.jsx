function HomeSlide({homeSlideComponent}) {
  return (
    <section className="p-0">
      <div className="slide-1 home-slider">
        <div>
          <div className="home text-start">
            <img
              src={ '/front_matagri_projet_3/public/assets/images/home-banner/'+homeSlideComponent.imageName }
              alt=""
              className="bg-img blur-up lazyload"
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="slider-contain">
                    <div>
                      <h1 class="text-white">{homeSlideComponent.title}</h1>
                      <h4 class="text-success">
                        {homeSlideComponent.slogan}
                      </h4>
                      <h4 class="fst-italic text-white">
                        {homeSlideComponent.description}
                      </h4>
                      <a href="#" class="btn btn-solid">
                        Voir les matériels disponible
                      </a>
                    </div>
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

export default HomeSlide;
