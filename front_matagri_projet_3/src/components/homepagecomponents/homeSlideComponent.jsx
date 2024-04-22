import logo from "./NH_T6_DC.jpg";
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
              src={logo}
              alt="Logo"
              className="bg-img blur-up lazyload fondHomePage"
            />
            {/* <div className="container">
              <div className="row">
                <div className="col">
                  {
                    <div className="slider-contain">
                      <div>
                        <h1 class="text-white">MatAgri</h1>
                        <h4 class="text-success">
                          Gagnez en productivité grâce à nos matériels agricoles
                        </h4>
                        <h4 class="fst-italic text-white">
                          Application de location, livraison et mutualisation de
                          matériels agricoles.
                        </h4>
                        <a href="#" class="btn btn-solid">
                          Voir les matériels disponibles
                        </a>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSlide;
