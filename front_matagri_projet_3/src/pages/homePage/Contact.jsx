function ContactPage() {
  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <div className="breadcrumb-section">
        <div className="container">

            <div className="row">
                <div className="col-sm-6">
                    <div className="page-title">
                        <h2>Contact</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                            <li className="breadcrumb-item active">contact</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" class="theme-breadcrumb">
                <ol hidden className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      
      {/* <!-- breadcrumb End --> */}

      {/* <!--section start--> */}
      <section className="contact-page section-b-space">
        <div className="container">
          <div className="row section-b-space">
            <div className="col-lg-7 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-lg-5">
              <div className="contact-right">
                <ul>
                  <li>
                    <div className="contact-icon">
                      <i className="fa-solid fa-phone"></i>
                      <h6 style={{ color: "#862b0d" }}>Contactez-nous</h6>
                    </div>
                    <div className="media-body">
                      <p style={{ color: "#862b0d" }}>+261 34 25 125 43</p>
                      <p style={{ color: "#862b0d" }}>+261 32 44 879 50</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <h6 style={{ color: "#862b0d" }}>Adresse</h6>
                    </div>
                    <div className="media-body">
                      <p style={{ color: "#862b0d" }}>
                        Faravohitra, 101 Antananarivo
                      </p>
                      <p style={{ color: "#862b0d" }}>Madagascar</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="fa-solid fa-envelope"></i>
                      <h6 style={{ color: "#862b0d" }}>Email</h6>
                    </div>
                    <div className="media-body">
                      <p style={{ color: "#862b0d" }}>Support@matagri.com</p>
                      <p style={{ color: "#862b0d" }}>info@matagri.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form className="theme-form">
                <div className="form-row row">
                  <div className="col-md-6">
                    <label for="name">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Entrer votre prénom"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="email">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Entrer votre nom"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="review">Téléphone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="review"
                      placeholder="Entrer votre numéro"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="review">Ecrivez ici votre message</label>
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-solid" type="submit">
                      Soumettre
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Section ends--> */}
    </>
  );
}

export default ContactPage;
