import logoAro from "../assets/images/logos/logoAro.png";
import logoHenri from "../assets/images/logos/logoHenri.png";
import logoMaterauto from "../assets/images/logos/logoMaterauto.png";
import logoFertilizeo from "../assets/images/logos/logoFertilizeo.png";
import logoLegofruit from "../assets/images/logos/logoLegofruit.png";

function LogoSection() {
  return (
    <section className="section-b-space tools-brand" style={{marginTop: "-95px"}}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-2">
            {" "}
            <div className="logo-block">
                <img src={logoAro} alt="Logo Aro" />
            </div>
          </div>
          <div className="col-2">
            <div className="logo-block">
                <img src={logoHenri} alt="Logo Henri" />
            </div>
          </div>
          <div className="col-2">
            <div className="logo-block">
                <img src={logoMaterauto} alt="Logo Materauto" />
            </div>
          </div>
          <div className="col-2">
            <div className="logo-block">
                <img src={logoFertilizeo} alt="Logo Fertilizeo" />
            </div>
          </div>
          <div className="col-2">
            <div className="logo-block">
                <img src={logoLegofruit} alt="Logo Legofruit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSection;
